import { LoginPageUI } from "../../interfaces/LoginPageUI";
import { Basepage } from "../commons/BasePage";

export class LoginPageObject extends Basepage{
    constructor() {
        super(); // Gọi constructor của lớp cha (Basepage)
    }
    clickToUsernameTextboxByContainsText():void{
        this.clickToElement(LoginPageUI.TYPE_TEXTBOX_USERNAME_ELEMENT)
    }
    selectValueUserNameByValue(valueSelect :string):void{
        this.selectItemCustomDropdown(LoginPageUI.TYPE_TEXTBOX_USERNAME_ELEMENT,LoginPageUI.ALL_VALUE_USERNAME_DROPLIST,valueSelect)
    }
    selectAllValueUserNameDropList():Cypress.Chainable<JQuery<HTMLElement>>{
        return this.getWebElement(LoginPageUI.ALL_VALUE_USERNAME_DROPLIST);
    }
    selectTextsOfAllValueUserNameDropList():Cypress.Chainable<string[]>{
        return this.getTextsListWebElement(LoginPageUI.ALL_VALUE_USERNAME_DROPLIST);
    }
    clickToPasswordTextbox():void{
        this.clickToElement(LoginPageUI.PASSWORD_TEXTBOX);
    }
    typeToPasswordTextbox(valuePassword:string):void{
        for (const char of valuePassword) {
            this.clickToElement(LoginPageUI.DYNAMIC_KEYBOARD_BUTTON(char));
        }
    }
    clickToHiddenButton(){
        this.clickToElementContainsText(LoginPageUI.TYPE_HIDDEN_ELEMENT,LoginPageUI.TEXT_HIDDEN_LABEL);
    }
    //OK, Cancel, clear one char, clear all  button, converUPTOCASELOWERCASE,
    clickToSpecialOnKeyBoardButtonByDataTestID(valueDataTestId:string):void{
        this.clickToElement(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(valueDataTestId));
        console.log(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(valueDataTestId))
    }
    clickToConvertTypeCharactertButton(text:string):void{
        this.clickToElement(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_TEXT(text));
        
    }
    isDisplayKeyBorad(valueDataTestId:string):void{
        cy.log(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(valueDataTestId))
        this.isElementDisplayed(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(valueDataTestId))
    }
    isUnDisplayKeyBorad(valueDataTestId:string): void {
        this.isElementUndisplayed(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(valueDataTestId))
        
    }
    getAccretechImg (text: string): void{
        this.getWebElement(LoginPageUI.ACCRETECH_IMG);
    } 
    isAccretechImgDisplay():void{
        this.isElementDisplayed(LoginPageUI.ACCRETECH_IMG)
    }
    checkColorBorderUserNameTextBox(cssPropertyName: string,valuePropertyCss: string):void{
        //cy.log("aaaaaaaaaaaaaaaaaaaaaaaa "+LoginPageUI.TEXT_USERNAME_TEXTBOX+"kkkkkkkkkkkkk"+LoginPageUI.TEXT_USERNAME_TEXTBOX)
        this.checkElementCssValueContainsText(LoginPageUI.TYPE_TEXTBOX_USERNAME_ELEMENT,LoginPageUI.TEXT_USERNAME_TEXTBOX,cssPropertyName,valuePropertyCss)
    }
    checkColorBorderPasswordTextBox(cssPropertyName: string,valuePropertyCss: string):void{
        this. checkElementCssValue(LoginPageUI.PASSWORD_TEXTBOX,cssPropertyName,valuePropertyCss)
    }
    getTextPasswordPassword():Cypress.Chainable<string>{
        return this.getTextElement(LoginPageUI.PASSWORD_TEXTBOX);
    }
    checkValuePassword(valuePassword:string ): void{
     this.getTextElement(LoginPageUI.PASSWORD_TEXTBOX).should(`${valuePassword}`)
    }
    // compareValueInPasswordTextbox(expectedText :string):void{
    //     this.compareValues(LoginPageUI.PASSWORD_TEXTBOX,expectedText);
    // }
    // compareOtherValueInPasswordTextbox(expectedText :string):void{
    //     this.compareOtherValues(LoginPageUI.PASSWORD_TEXTBOX,expectedText);
    // }
    isSpecialButtonOnKeyboradDisplayByText(text:string):void{
        this.isElementDisplayed(LoginPageUI.DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_TEXT(text))
    }
    // space buttons
    clickSpaceButton(): void{
        this.clickToElement(LoginPageUI.DYNAMIC_SPACE_BUTTON)
    }
    compareEqualValueTextboxPassword(expectedValue: string,attributeName: string,): void{
        this.compareEqualValueAttribute(LoginPageUI.PASSWORD_TEXTBOX,expectedValue,attributeName)
    }
    compareNotEqualValueTextboxPassword(expectedValue: string,attributeName: string,): void{
        this.compareNotEqualValueAttribute(LoginPageUI.PASSWORD_TEXTBOX,expectedValue,attributeName)
    }
    // Intercep
    checkValueDropListNotInDom(dataValue:String):void{
        this.clickToElementContainsText(LoginPageUI.TYPE_TEXTBOX_USERNAME_ELEMENT,LoginPageUI.TEXT_USERNAME_TEXTBOX);
        this.checkElementNotInDom(LoginPageUI.DYNAMIC_OPTION_DROPLIST_BY_DATA_VALUE("admin"))

    }

    //CR chang
    
    VerifyDisplayOfFiveIcon():void{
       // this.clickToElementContainsText(LoginPageUI.TYPE_TEXTBOX_USERNAME_ELEMENT,LoginPageUI.TEXT_USERNAME_TEXTBOX);
        this.isElementDisplayed(LoginPageUI.ALL_ACCOUNT_ICON);
    }
    VerifyColorOfIcon(account: string,cssPropertyName:string, color:string):void{
        this.checkElementCssValueTest(LoginPageUI.DYNAMIC_ACCOUNT_ICON_BY_ACCOUNTNAME(`${account}`),cssPropertyName,color);
    }
    
    verifyUserNameIsSelected(account: string):void{
        this.isElementContainsTextDisplayed("div",account);
    }
    selectDifferenceAccount(account:string):void{
        this.clickToElement("[aria-expanded='false']");
        this.clickToElementContainsText("li",account);
    }



    
    

}