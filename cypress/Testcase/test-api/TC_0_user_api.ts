import { GlobalConstants } from "../../actions/commons/GlobalConstants";
import { HttpMethod } from "../../actions/commons/HttpsMethod";

describe('Test GET request',()=>{
    it('should be able to send GET request and verify the response',()=>{
        let expectedDataListUser = {};
        cy.fixture('userData').then((data) => { 
            expectedDataListUser = data;
        });
        //Sau khi request xong, se then tra ve reponse
        //Function getPost is written on commansApi.ts
         cy.getData(GlobalConstants.userAPI,HttpMethod.GET).then((response:any)=>{
         cy.log(JSON.stringify(response))
         expect(response.status).to.eq(200)
         expect(response.body).to.eql(expectedDataListUser)
       })
    })
})