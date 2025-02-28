import { GlobalConstants } from "../../../actions/commons/GlobalConstants";
import { PageGeneratorManager } from "../../../actions/commons/PageGeneratorManager";
import { LoginPageObject } from "../../../actions/pageObject/LoginPageObject";
import { HeaderObject } from "../../../actions/pageObject/HeaderPageObject";

describe("Login_02_Keyboard", () => {
    let loginPage: LoginPageObject;
    let headerPage : HeaderObject;

    let username="ad"
    let password = "a"
    let passwordAfterTC03 = ""
    let passwordTC04 = "a"
    let passwordAfterTC05 = "a"
    let passwordTC08 = " "
    let passwordBeforeTC09= "qwertyuiopasdfghjklzxcvbnm"
    let passwordAfterTC09= "QWERTYUIOPASDFGHJKLZXCVBNM"
    let passwordTC10="qwertyuiopasdfghjklzxcvbnm"
    let passwordTC11= "1234567890_\|~<>@.,?!\""
    let passwordTC12= "[]{}#%^*+=-/:;()$&.,?!\";"
    

    before(() => {
        // New Page Object: thực hiện duy nhất 1 lần
        loginPage = PageGeneratorManager.getloginPage();
        headerPage=PageGeneratorManager.getHeaderPage();
        
    });
    beforeEach(() => {
        // Truy cập vào trang login trước mỗi test case
        // cy.intercept('GET', 'htts', {
        //     statusCode: 200,
        //     body: {
        //         value: [
        //             { user: "kljjklh", userId: 1 },
        //            

        //         ]
        //     }
        // })
        // cy.intercept('GET', 'https://c', {
        //     statusCode: 200,
        //     body: {
        //         value: 0
        //     }
        // })
        // cy.intercept('GET', 'https://', {
        //     statusCode: 200,
        //     body: {
        //         exception_defs: []
        //     }
        // })
         cy.intercept('GET', 'https://c').as('getUsers')
        // cy.intercept('GET', 'https://').as('getCurrentLanguage')
        // cy.intercept('GET', 'https').as('getExceptions')
       
        //cy.intercept('GET', '*').as('getUsers');

        cy.openUrl(GlobalConstants.LoginURL);//ham nay trong commands
        loginPage = PageGeneratorManager.getloginPage();
        
          
    })
    it("TC_01_Fuction of [Cancel] button", () => {
        cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        //Type to password textbox
        loginPage.typeToPasswordTextbox(password)

        //Click to cancel button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")

        //Verify
        //loginPage.isDisplayKeyBorad()
        loginPage.isUnDisplayKeyBorad("keyboardTestId")

    })
    it("TC_02_Function of [OK] button", () => {
        cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')

        loginPage.selectValueUserNameByValue(username);
        loginPage.clickToHiddenButton()

        //Type to password textbox
        loginPage.typeToPasswordTextbox(password)

        //Click to cancel button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId")

        //Verify login success
        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

    })
    it("TC_03_function of clear all button", () => {
         cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()

        //Type to password textbox
        loginPage.typeToPasswordTextbox(password)

        //Click the clear all button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("DeleteForeverOutlinedIcon");

        //Verify the value of password textbox with string ""
        loginPage.compareEqualValueTextboxPassword("value",passwordAfterTC03);

    })
    xit("TC_04_function of hidden button", () => {
         cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()
        //Type to password textbox
        loginPage.typeToPasswordTextbox(password)
        loginPage.clickToHiddenButton()
        
        //Compare other
        loginPage.compareNotEqualValueTextboxPassword("value",passwordTC04)

    })
    it("TC_05_function of clear one char button", () => {
        cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()

        //Type to password textbox
        loginPage.typeToPasswordTextbox(password)

        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("BackspaceOutlinedIcon");

        //Verify 
        loginPage.compareEqualValueTextboxPassword("value",passwordAfterTC05)

    })
    it("TC_06_function of [ABC] [.?123] button", () => {
        cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();
        loginPage.clickToConvertTypeCharactertButton(".?123")

        //Verify display of the ABC button
        loginPage.isSpecialButtonOnKeyboradDisplayByText("ABC")

        //Click ABC button
        loginPage.clickToConvertTypeCharactertButton("ABC")

        //Verify display of .?123 button
        loginPage.isSpecialButtonOnKeyboradDisplayByText(".?123")

    })
    it("TC_07_function of [123],[#+=] button", () => {
         cy.wait('@getUsers')
        // cy.wait('@getCurrentLanguage')
        // cy.wait('@getExceptions')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();
        loginPage.clickToConvertTypeCharactertButton(".?123")

        //Verify display of the #+= button
        loginPage.isSpecialButtonOnKeyboradDisplayByText("#+=")

        //Click ABC button
        loginPage.clickToConvertTypeCharactertButton("#+=")

        //Verify display of 123 button
        loginPage.isSpecialButtonOnKeyboradDisplayByText("123")
    })
    it("TC_08_function of space button", () => {
        cy.wait('@getUsers')
         //Click to password textbox
         loginPage.clickToPasswordTextbox();

         loginPage.clickToHiddenButton()
 
         //Click the space button
         loginPage.clickSpaceButton();
 
         //Verify the value of password textbox with string ""
         loginPage.compareEqualValueTextboxPassword("value",passwordTC08) 
    })
    it("TC_09_function of uppercase button", () => {
        cy.wait('@getUsers')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()
      
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("KeyboardCapslockOutlinedIcon");

         //Type to password textbox
        loginPage.typeToPasswordTextbox(passwordBeforeTC09)
         //Verify the value of password textbox with string ""
        loginPage.compareEqualValueTextboxPassword("value",passwordAfterTC09)

    })
    it("TC_10_function of lowercase button", () => {
        cy.wait('@getUsers')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()
        //Type to password textbox
        loginPage.typeToPasswordTextbox(passwordTC10)

        //Verify the value of password textbox with string ""
        loginPage.compareEqualValueTextboxPassword("value",passwordTC10) 



    })
    it("TC_11_function of number and special button", () => {
        cy.wait('@getUsers')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()
        loginPage.clickToConvertTypeCharactertButton(".?123")
        //Type to password textbox
        loginPage.typeToPasswordTextbox(passwordTC11)
        //Verify the value of password textbox with string ""
        loginPage.compareEqualValueTextboxPassword("value",passwordTC11)
        

    })
    it("TC_11_function of number and special button", () => {
        
        cy.wait('@getUsers')
        //Click to password textbox
        loginPage.clickToPasswordTextbox();

        loginPage.clickToHiddenButton()
        loginPage.clickToConvertTypeCharactertButton(".?123")
         
         loginPage.clickToConvertTypeCharactertButton("#+=")

         //Type to password textbox
        loginPage.typeToPasswordTextbox(passwordTC12)
        //Verify the value of password textbox with string ""
        loginPage.compareEqualValueTextboxPassword("value",passwordTC12)

    })
    

})