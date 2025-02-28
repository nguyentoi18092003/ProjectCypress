
export function visit(url: string){
    cy.visit(url, {
        auth: {
          username: '',
          password: '',
          //Type username, password that customer provide
        },
      })
}
export function loginSuccessful(url:string,userName: string, password: string) {
    visit(url);
    
}
