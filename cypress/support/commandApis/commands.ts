/**
 * @memberOf cy
 * @Method getPost
 *  @params {String} url
 */
Cypress.Commands.add("getData", (method: string,url: string) => {
  return cy.request({
    method: method,
    url: url,
    failOnStatusCode: false  // Đảm bảo không thất bại khi nhận mã trạng thái 400 hoặc tương tự
  });
});
Cypress.Commands.add("postData", (method: string,url: string, requestBody: object) => {
    return cy.request({
      method: method,          // Sử dụng phương thức POST
      url: url,                // URL mà bạn muốn gửi yêu cầu đến
      body: requestBody,       // Dữ liệu bạn muốn gửi đi trong body của yêu cầu
      failOnStatusCode: false  // Đảm bảo không thất bại khi nhận mã trạng thái không phải 2xx hoặc 3xx
    });
  });
  