export class BasepageLan2{
      countDecimalPlaces(str: string): number {
    const parts = str.split(".");
    return parts.length === 2 ? parts[1].length : 0;
}
truncateDecimal(num: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.trunc(num * factor) / factor;
}
roundToDecimal(num: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}
  getWebElement(locator: string): Cypress.Chainable<JQuery<HTMLElement>> {
    if (locator.startsWith("xpath"))
      return cy.xpath(locator.substring(6));
    else if (locator.startsWith("containsText")) {
      const typeElement_and_text = locator.substring(13);
      const [typeElement, text] = typeElement_and_text.split('_');
      return cy.get(typeElement).contains(text);
    }
    return cy.get(locator);
  }
  hslToRgb(h: number, s: number, l: number): string {
    let r: number, g: number, b: number;

    // Đảm bảo rằng các giá trị HSL đã được chuẩn hóa về dạng từ 0 đến 1.
    h = h % 1; // Hue phải trong phạm vi 0-1
    s = s / 100; // Chuyển saturation từ [0, 100] sang [0, 1]
    l = l / 100; // Chuyển lightness từ [0, 100] sang [0, 1]

    if (s === 0) {
      // Màu xám khi saturation bằng 0
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    // Trả về giá trị RGB dưới dạng chuỗi
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  }
  convertToRgb(colorString: string): string {
    switch (true) {
      case colorString.startsWith("hsl"):
        // Convert from HSL to RGB
        const [H, S, L] = colorString.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
        if (H === undefined || S === undefined || L === undefined) {
          return "Invalid HSL format";
        }
        return this.hslToRgb(H / 360, S / 100, L / 100);

      case colorString.startsWith("rgba"):
        // Convert from RGBA to RGB
        const RGBVALUES = colorString.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
        const [rR, rG, rB] = RGBVALUES.slice(0, 3);
        return `rgb(${rR}, ${rG}, ${rB})`;

      case colorString.startsWith("#"):
        // Expand shorthand form (e.g., #0fc to #00ffcc)
        colorString =
          colorString.length === 4
            ? `#${colorString[1]}${colorString[1]}${colorString[2]}${colorString[2]}${colorString[3]}${colorString[3]}`
            : colorString;

        // Convert from HEX to RGB
        const BIGINT = parseInt(colorString.slice(1), 16);
        const hexR = (BIGINT >> 16) & 255;
        const hexG = (BIGINT >> 8) & 255;
        const hexB = BIGINT & 255;
        return `rgb(${hexR}, ${hexG}, ${hexB})`;

      case colorString.startsWith("rgb"):
        // if RGB, return it
        return colorString;

      default:
        // TBU: some format which automation still cannot be checked (example: linear-gradient)
        return "format is out of range";
    }
  }
  checkElementCssValue(locator: string, cssPropertyName: string, valuePropertyCss: string): Cypress.Chainable {
    valuePropertyCss = this.convertToRgb(valuePropertyCss);
    return this.getWebElement(locator).should('have.css', `${cssPropertyName}`, `${valuePropertyCss}`);
  }

  // Hàm lấy text từ một phần tử chứa text xác định
  verifyElementDisplayed(typeElement_and_text: string): Cypress.Chainable<boolean> {
    return this.getWebElement(typeElement_and_text).should('be.visible').then(($element) => {
      return $element.is(':visible'); // Trả về true nếu phần tử hiển thị
    });
  }
  verifyElementUndisplayed(locator: string): void {
    this.getWebElement(locator).should('not.exist');
    this.getWebElement(locator).should('not.be.visible');
  }
  VerifyElementNotInDom(locator: string): void {
    this.getWebElement(locator).should('not.exist', { timeout: 10000 })
      .then(() => {
        cy.log("Element with type");
      });
  }
  getTextElement(locator: string, textOfElement: string): void {
    this.getWebElement(locator)
      .invoke('text')
      .then((textContent) => expect(textContent.trim()).to.equal(textOfElement));
  }
  compareValue(locator: string, textOfElement: string): void {
    this.getWebElement(locator).invoke('text')
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, ' ').trim(); // Xóa khoảng trắng thừa
        expect(normalizedText).to.equal(`${textOfElement}`);
      })
  }
}