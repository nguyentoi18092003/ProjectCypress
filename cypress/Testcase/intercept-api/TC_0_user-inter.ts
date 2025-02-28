import { GlobalConstants } from "../../actions/commons/GlobalConstants";
import { HttpMethod } from "../../actions/commons/HttpsMethod";
import { HttpStatus } from "../../actions/commons/HttpStatus";
import { PageGeneratorManager } from "../../actions/commons/PageGeneratorManager";
import { LoginPageObject } from "../../actions/pageObject/LoginPageObject";

describe('Test intercept userData and assert data intercept and dataUI', () => {
  let bodyData :any;
  let loginPage: LoginPageObject;

  before(() => {
    loginPage= PageGeneratorManager.getloginPage();
    // Khai báo dữ liệu bodyData trước khi chạy các test
    bodyData = {
      value: [
        {
         
        },
        {
         
        },
        {
          
        },
        {
         
        },
        {
          "user": "a",
          "userId": 5
        }
      ]
    };
  });

  it('modify API response and verify on UI', () => {
    // Truy cập trang web, function open is written on commands
    cy.openUrl(GlobalConstants.LoginURL);

    // Thực hiện intercept để thay đổi dữ liệu trả về từ API
    cy.intercept(HttpMethod.GET, GlobalConstants.userAPI, {
      statusCode:HttpStatus.OK,
      body: bodyData  
    }).as('users');

    // Chờ API trả về dữ liệu đã được thay đổi
    cy.wait('@users').then((interception:any) => {
      const items = interception.response.body.value;  // Lấy dữ liệu đã thay đổi
      const apiUserNames = items.map((item:any) => item.user);  // Tạo mảng tên người dùng từ API

      // Bước 4: Lấy danh sách tên người dùng từ giao diện
      loginPage.clickToUsernameTextboxByContainsText();
      expect(apiUserNames.length).to.equal(items.length);
      loginPage.selectTextsOfAllValueUserNameDropList().then(result => {
          expect(result).to.deep.equal(apiUserNames);
      });
    });
  });
});
