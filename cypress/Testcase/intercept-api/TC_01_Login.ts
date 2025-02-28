import { GlobalConstants } from "../../actions/commons/GlobalConstants";
import { HttpMethod } from "../../actions/commons/HttpsMethod";
import { HttpStatus } from "../../actions/commons/HttpStatus";
import { PageGeneratorManager } from "../../actions/commons/PageGeneratorManager";
import { HeaderObject } from "../../actions/pageObject/HeaderPageObject";
import { LoginPageObject } from "../../actions/pageObject/LoginPageObject";
describe('Test intercept userData and assert data intercept and dataUI', () => {
    let bodyData200: any;
    let bodyData400: any;
    let bodyData403: any;
    let bodyData404: object;
    let bodyData500:object;
    let loginPage: LoginPageObject;
    let headerPage:HeaderObject;

    before(() => {
        loginPage = PageGeneratorManager.getloginPage();
        headerPage=PageGeneratorManager.getHeaderPage();
        // Khai báo dữ liệu bodyData trước khi chạy các test
        bodyData200 = {
            value: [
                {}
            ]
        };
        bodyData400 = {
           
        }
        bodyData403={
            
          }
        bodyData404={
            
          }
        bodyData500={
            
          }           
    });
    beforeEach(() => {
    cy.openUrl(GlobalConstants.LoginURL);
      })

    it('HTTP 200 Returned if the request is successful', () => {
        cy.intercept(HttpMethod.GET, GlobalConstants.login_UserApi, {
            statusCode: HttpStatus.OK,
            body: bodyData200
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
    
    })

    it('HTTP 400 Returned if parameter is invalid', () => {
        
         cy.intercept(HttpMethod.GET, GlobalConstants.login_UserApi, {
            statusCode: HttpStatus.BAD_REQUEST,
            body: bodyData400
        }).as('users');
 
         cy.wait('@users').then((interception: any) => {
            expect(interception.response.statusCode).to.eq(400);
            loginPage.checkValueDropListNotInDom("admin")
        })        
    });

    it('HTTP 403 Return if do not have permission to access', () => {
        // Thực hiện intercept để thay đổi dữ liệu trả về từ API
        cy.intercept(HttpMethod.GET, GlobalConstants.userAPI, {
            statusCode: HttpStatus.FORBIDDEN,
            body: bodyData403
        }).as('users');

        cy.wait('@users').then((interception: any) => {
            loginPage.checkValueDropListNotInDom("admin")
        });
    });
    it('HTTP 404 Returned if URI is not found', () => {
        // Thực hiện intercept để thay đổi dữ liệu trả về từ API
        cy.intercept(HttpMethod.GET, GlobalConstants.userAPI, {
            statusCode: HttpStatus.NOT_FOUND,
            body: bodyData404
        }).as('users');

        // Chờ API trả về dữ liệu đã được thay đổi
        cy.wait('@users').then((interception: any) => {
            loginPage.checkValueDropListNotInDom("admin")
        });
    });
    it.only('HTTP 500 Returned if an Internal Server Error occurred', () => {
        // Thực hiện intercept để thay đổi dữ liệu trả về từ API
        cy.intercept(HttpMethod.GET, GlobalConstants.userAPI, {
            statusCode: HttpStatus. INTERNAL_SERVER_ERROR,
            body: bodyData500
        }).as('users');

        // Chờ API trả về dữ liệu đã được thay đổi
        cy.wait('@users').then((interception: any) => {
            loginPage.checkValueDropListNotInDom("admin")
        });
    });

});
