import { PageGeneratorManager } from "../../../actions/commons/PageGeneratorManager";
import { LoginPageObject } from "../../../actions/pageObject/LoginPageObject";
import { HeaderObject } from "../../../actions/pageObject/HeaderPageObject";

describe('test',()=>{
    let loginPage:LoginPageObject;
    let listFiveAccount: string[];
    let listFiveColor: string[];
    let headerPage : HeaderObject;
    let usersData;
    
before(() => {
    // New Page Object: thực hiện duy nhất 1 lần
    loginPage = PageGeneratorManager.getloginPage();
    listFiveAccount=["op"];
    listFiveColor=["#2E7D32","#FFC700","#1976D2","#ED6C02","#D32F2F"];
    usersData=cy.fixture('usersData'); 
   
});
beforeEach(() => {
    cy.intercept('GET', 'https://').as('getUsers')
    // Truy cập vào trang login trước mỗi test case
    cy.openUrl("https:/");//ham nay trong commands
  
    
})
it("Verify the display icon with 5 accounts:operator, maintainer, engineer, admin, accretech in the droplist and  icon color of the icons",()=>{
    loginPage.clickToUsernameTextboxByContainsText();
    loginPage.VerifyDisplayOfFiveIcon();     
})
it("The icon's color for the five account: operator, maintainer, engineer, admin, accretech",()=>{
    //Click on the userName textbox
    loginPage.clickToUsernameTextboxByContainsText();
    //Check icon's color of operator account 
    loginPage.VerifyColorOfIcon(listFiveAccount[0],"color",listFiveColor[0]);
    //Check icon's color of maintainer account
    loginPage.VerifyColorOfIcon(listFiveAccount[1],"color",listFiveColor[1]);
    //Check icon's color of engineer account
    loginPage.VerifyColorOfIcon(listFiveAccount[2],"color",listFiveColor[2]);
    //Check icon's color of admin account
    loginPage.VerifyColorOfIcon(listFiveAccount[3],"color",listFiveColor[3]);
    //Check icon's color of accretech account
    loginPage.VerifyColorOfIcon(listFiveAccount[4],"color",listFiveColor[4]);
})
it("Verify the display of 5 accounts:operator, maintainer, engineer, admin, accretech after they are selected",()=>{
    // for(let i=0;i<5;i++){
    //     if(i!=0) loginPage.selectDifferenceAccount(listFiveAccount[i])
    //     else loginPage.selectValueUserNameByValue(listFiveAccount[i]);
        
    //     //Check account name
    //     loginPage.verifyUserNameIsSelected(listFiveAccount[i]);
    //     //Check color of account
    //     loginPage.VerifyColorOfIcon(listFiveAccount[i],"color",listFiveColor[i]);
    //     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")
        
    //  }
     loginPage.selectValueUserNameByValue(listFiveAccount[0]);
     //Check account name
     loginPage.verifyUserNameIsSelected(listFiveAccount[0]);
     //Check color of account
     loginPage.VerifyColorOfIcon(listFiveAccount[0],"color",listFiveColor[0]);
     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")

     loginPage.selectDifferenceAccount(listFiveAccount[1]);
     //Check account name
     loginPage.verifyUserNameIsSelected(listFiveAccount[1]);
     //Check color of account
     loginPage.VerifyColorOfIcon(listFiveAccount[1],"color",listFiveColor[1]);
     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")

     loginPage.selectDifferenceAccount(listFiveAccount[2]);
     //Check account name
     loginPage.verifyUserNameIsSelected(listFiveAccount[2]);
     //Check color of account
     loginPage.VerifyColorOfIcon(listFiveAccount[2],"color",listFiveColor[2]);
     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")

     loginPage.selectDifferenceAccount(listFiveAccount[3]);
     //Check account name
     loginPage.verifyUserNameIsSelected(listFiveAccount[3]);
     //Check color of account
     loginPage.VerifyColorOfIcon(listFiveAccount[3],"color",listFiveColor[3]);
     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")

     loginPage.selectDifferenceAccount(listFiveAccount[4]);
     //Check account name
     loginPage.verifyUserNameIsSelected(listFiveAccount[4]);
     //Check color of account
     loginPage.VerifyColorOfIcon(listFiveAccount[4],"color",listFiveColor[4]);
     loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonCancelTestId")
})
it("Verify display of the accounts other than operator, maintainer, engineer, admin, accretech after they are selected",()=>{
    loginPage.selectValueUserNameByValue("a");
    loginPage.verifyUserNameIsSelected("a");
})
it.only("Check the username in the CTA after logging in",()=>{
    loginPage.selectValueUserNameByValue("a");
    loginPage.typeToPasswordTextbox("a");
    loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

    headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");
       headerPage.verifyTextOfUsernameButton("a","a");

        //Logout
       
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();

})
    

})

