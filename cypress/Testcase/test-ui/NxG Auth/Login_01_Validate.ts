import { GlobalConstants } from "../../../actions/commons/GlobalConstants";
import { PageGeneratorManager } from "../../../actions/commons/PageGeneratorManager";
import { HeaderObject } from "../../../actions/pageObject/HeaderPageObject";
import { LoginPageObject } from "../../../actions/pageObject/LoginPageObject";
describe("Login_01_Validate",()=>{
    let loginPage: LoginPageObject;
    let headerPage : HeaderObject;
    const users = [
        { userName: 'fgd', password: 'dfgs' },
        { userName: 'dfg', password: 'ererr' },
        { userName: 'retre', password: 'reter' },
        { userName: 'uuu', password: 'ree' },
        { userName: 'sdfgs', password: 'dgf' }
      ];
    
  before(() => {
    // New Page Object: thực hiện duy nhất 1 lần
    loginPage = PageGeneratorManager.getloginPage();
    
  });
  beforeEach(() => {
    cy.intercept('GET', 'https://cloud-').as('getUsers')
    // Truy cập vào trang login trước mỗi test case
    cy.openUrl(GlobalConstants.LoginURL);//ham nay trong commands
   
    loginPage = PageGeneratorManager.getloginPage();
    
  })
    it(`TC_01: Login success with account `,()=>{
        loginPage.selectValueUserNameByValue(users[0].userName);
        loginPage.clickToHiddenButton()
        loginPage.typeToPasswordTextbox(users[0].password);
        //Click button OK
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

        //Logout
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();

    })
    it(`TC_02: Login success with account ${users[1].userName}`,()=>{
        loginPage.selectValueUserNameByValue(users[1].userName);
        loginPage.clickToHiddenButton()
        loginPage.typeToPasswordTextbox(users[1].password);
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

        //Logout
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();
        
    })
    it(`TC_03: Login success  with account ${users[2].userName}`,()=>{
        loginPage.selectValueUserNameByValue(users[2].userName);
        loginPage.clickToHiddenButton()
        loginPage.typeToPasswordTextbox(users[2].password);
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

        //Logout
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();
        
    })
    it(`TC_04: Login success with account ${users[3].userName}`,()=>{
        loginPage.selectValueUserNameByValue(users[3].userName);
        loginPage.clickToHiddenButton()
        loginPage.typeToPasswordTextbox(users[3].password);
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

        //Logout
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();
        
    })
    it(`TC_05: Login success with account ${users[4].userName}`,()=>{
        loginPage.selectValueUserNameByValue(users[4].userName);
        loginPage.clickToHiddenButton()
        loginPage.typeToPasswordTextbox(users[4].password);
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        headerPage=PageGeneratorManager.getHeaderPage();

        //Assert login sucess
        headerPage.isButtonHeaderByDataTestIdDisplayed("AccountCircleIcon");

        //Logout
        headerPage.clickToHeaderButtonByDataTestID("AccountCircleIcon");
        headerPage.clickToDialogButtonByContainsText("Logout");

        loginPage = PageGeneratorManager.getloginPage();
        
    })
    
    it('TC_06: Login fail with username and password textbox blank',()=>{
        loginPage.clickToPasswordTextbox()

        //Click OK button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId")

        //Verify both of the color border of username textbox and password textbox is red 
        loginPage.checkColorBorderUserNameTextBox('color','rgb(193, 193, 193)')
        loginPage.checkColorBorderPasswordTextBox('color','rgb(38, 38, 38)')       
        
    })

    it('TC_07: Login fail with password blank',()=>{
        //Select username value 
        loginPage.selectValueUserNameByValue(users[0].userName);
        //Click OK button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        //Veryfy
        loginPage.checkColorBorderPasswordTextBox('color','rgb(38, 38, 38)') 
    })
    
    it('TC_08:Login fail with username blank',()=>{
        cy.wait('@getUsers')
        //Click to display keyboard
        loginPage.clickToPasswordTextbox();

        //Type password textbox
        loginPage.typeToPasswordTextbox(users[0].password)

        //Click OK button
        loginPage.clickToSpecialOnKeyBoardButtonByDataTestID("buttonOkTestId");

        //Verify
        loginPage.checkColorBorderUserNameTextBox('color','rgb(193, 193, 193)')

    })
})