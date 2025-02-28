import { HeaderUI } from "../../interfaces/HeaderUI";
import { Basepage } from "../commons/BasePage";

export class HeaderObject extends Basepage{
    constructor() {
        super(); // Gọi constructor của lớp cha (Basepage)
    }
    getButtonHeaderByDataTestID(dataTestID:string): Cypress.Chainable<JQuery<HTMLElement>>{
        return this.getWebElement(HeaderUI.DYNAMIC_BUTTON_ON_HEADER_BY_DATA_TESTID(dataTestID))
    }
    isButtonHeaderByDataTestIdDisplayed(dataTestID:string):Cypress.Chainable{
        return this.getWebElement(HeaderUI.DYNAMIC_BUTTON_ON_HEADER_BY_DATA_TESTID(dataTestID)).should('be.visible');
    }
    clickToHeaderButtonByDataTestID(dataTestID:string):void{
        // this.waitForElementClickable(HeaderUI.DYNAMIC_BUTTON_ON_HEADER_BY_DATA_TESTID(dataTestID),1000)
        this.clickToElement(HeaderUI.DYNAMIC_BUTTON_ON_HEADER_BY_DATA_TESTID(dataTestID))
    }
    clickToDialogButtonByContainsText(text:string):void{
        this.clickToElement(HeaderUI.DYNAMIC_BUTTON_ON_DIALOG_BY_CONTAINS_TEXT(text));
    }
    verifyTextOfUsernameButton(text:string, userName:string):void{
        //this.compareValues(HeaderUI.DYNAMIC_TEXT_IN_USERNAME_TEXTBOX(dataTestID),userName);
        //this.clickToElement(HeaderUI.DYNAMIC_TEXT_IN_USERNAME_TEXTBOX(dataTestID));
        this.getTextElement(HeaderUI.DYNAMIC_TEXT_IN_USERNAME_TEXTBOX(text)).should(`${userName}`);
    };
   
}