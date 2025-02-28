import { GlobalConstants } from "../../actions/commons/GlobalConstants";
import { HttpMethod } from "../../actions/commons/HttpsMethod";
import { HttpStatus } from "../../actions/commons/HttpStatus";
//Chua test file nay
describe('Test [DELETE] group',()=>{
    before(() => {
     
    });
    const bodyData_TC05={"deleted_rows":0}
it('TC_05: Send requests with other methods  DELETE ',()=>{
    const url = GlobalConstants.listRoleHaveGroupApi('1');
    cy.getData(url,HttpMethod.DELETE).then((response:any)=>{
    //cy.log(JSON.stringify(response))
    
    expect(response.status).to.eq(HttpStatus.OK)
    expect(response.body).to.eql(bodyData_TC05)

})

})
})