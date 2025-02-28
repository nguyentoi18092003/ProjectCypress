import 'cypress-xpath';  // Thêm dòng này vào file commands.ts
// Trong tệp support/commands.js hoặc support/commands.ts (tuỳ vào việc bạn dùng JavaScript hay TypeScript)

Cypress.Commands.add("openUrl", (url:string)=>{
    //cy.visit(url)
    cy.visit(url, {
        auth: {
          username: '',
          password: '',
          //Type username, password that customer provide
        },
      })
    })
Cypress.Commands.add("login", (sessionValue:string)=>{
    // Kiểm tra xem giá trị sessionStorage có tồn tại hay không
    if (sessionValue) {
      cy.log('SessionStorage Value:', sessionValue);

      // Giả sử bạn muốn lưu lại sessionValue vào cookie hoặc sử dụng trong những lần đăng nhập sau
      cy.setCookie('nxgAuth_SS_user', sessionValue);
    } else {
      cy.log('No session value found.');
    }
    })
