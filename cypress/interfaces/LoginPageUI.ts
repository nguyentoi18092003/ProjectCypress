export class LoginPageUI{
   // Phương thức động tạo CSS selector cho dropdown
    public static readonly TYPE_TEXTBOX_USERNAME_ELEMENT :string="em"
    public static readonly TEXT_USERNAME_TEXTBOX :string="Select username";
    public static DYNAMIC_OPTION_DROPLIST_BY_DATA_VALUE(dataValue: string): string {
        return `li[data-value='${dataValue}']`;
    }
    public static readonly TYPE_HIDDEN_ELEMENT ="span";
    public static readonly TEXT_HIDDEN_LABEL: string="visibility"

    public static readonly PASSWORD_TEXTBOX: string = "input[placeholder='Password']";

    public static DYNAMIC_KEYBOARD_BUTTON(buttonKeyboard:string): string{
        return `xpath=//div[@data-testid='normalTextKeyTestId']/button[contains(text(), '${buttonKeyboard}')]`
    }
    //OK, Cancel, clear one char, clear all  button, converUPTOCASELOWERCASE, space button
    public static DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_DATA_TESTID(buttonSpecialOnKeyBoard :string): string{
        return `[data-testid='${buttonSpecialOnKeyBoard}']`
    }
    // public static DYNAMIC_CONVERT_CHARACTER_TYPE_BUTTON_BY_TEXT(text:string):string{
    //     return `xpath=//button[contains(text(), '${text}')]`
    // }
    public static readonly LOGIN_BUTTON :string ="button[type='submit']";
    public static readonly ALL_VALUE_USERNAME_DROPLIST="xpath=//ul[@role='listbox']/li"
    public static readonly ACCRETECH_IMG="[alt='Accretech']"
    //ABC, .?123,#+=,123
    public static  DYNAMIC_SPECIAL_ON_KEYBOARD_BUTTON_BY_TEXT(buttonKeyboard:string): string{
        return `xpath=//button[contains(text(), '${buttonKeyboard}')]`
    }
    public static readonly DYNAMIC_SPACE_BUTTON: string ="xpath=//button[contains(text(), '.?123')]/ancestor::div/following-sibling::div[1]/div/button/span"
    
    public static readonly ALL_ACCOUNT_ICON: string="[data-testid='AccountCircleIcon']";
    public static  DYNAMIC_ACCOUNT_ICON_BY_ACCOUNTNAME(account:String):string{
        return `li[data-value='${account}'] svg path`;
        //cy.get("li[data-value='operator'] svg path")
    } 
    //
    //-----------Kiếm tra thẻ chứa đoạn text ten dec 
    // const tag = 'div';  // Thẻ bạn muốn kiểm tra, có thể thay đổi
    // const searchText = 'Login';  // Văn bản bạn muốn tìm kiếm trong thẻ
    // const elements = document.querySelectorAll(`${tag}`);  // Lấy tất cả các thẻ được xác định trong biến tag
    // let count = 0;
    // elements.forEach(element => {
    // if (element.textContent.trim().includes(`${searchText}`)) {  // Kiểm tra nếu thẻ chứa văn bản trong searchText
    //     count++;
    // }
    // });
    // console.log(`Số lượng thẻ <${tag}> chứa văn bản "${searchText}": ${count}`);

    //Ham kiem tra xpath tren devtool
    //$x("//div[@data-testid='normalTextKeyTestId']/button[contains(text(), 'q')]");
}