import { GlobalConstants } from "../../actions/commons/GlobalConstants";
import { HttpMethod } from "../../actions/commons/HttpsMethod";

describe('Test [POST] group',()=>{
  before(() => {
     
  });
 
  const Expectedresponse ={
    "affected_rows": 1
   }
  
  const BodyEmpty={};
  const BodyNotHaveValue={
    "value":[]
  };
  const bodyDataHaveFormatValueIsArray = {
    "value": [
      { "user":"o" ,
        "userId":1
      },
    
     
    ]
  }
  const bodyDataHaveFormatValueIsObject = {
    "value":{
      //.....
    }
   }
  const  BodyIncorrectFormat="";

it('TC_01: Request Body JSON Format empty body',()=>{
  cy.postData(HttpMethod.POST,GlobalConstants.userApi,BodyEmpty).then(res=>{
    expect(res.status).to.eq( 400);
    // cy.getData(HttpMethod.GET,GlobalConstants.userApi).then(res=>{
    //     cy.log(JSON.stringify(res.body));
    //     expect(res.status).to.eq(200);
    //     expect(res.body.value).to.eql([])
    // })
    
  })
})
// it('TC_02: Request Body JSON Format is not correct formatr',()=>{
//   cy.postData(HttpMethod.POST,GlobalConstants.userApi,BodyNotHaveValue).then(res=>{
//     expect(res.status).to.eq(200);
//     expect(res.body).to.eql(Expectedresponse);
//     cy.log(JSON.stringify(res.body));
//     cy.getData(HttpMethod.GET,GlobalConstants.userApi).then(res=>{
//         cy.log(JSON.stringify(res.body));
//         expect(res.status).to.eq(200);
//         expect(res.body.value).to.eql(BodyNotHaveValue.value)
//     })
    
//   })
  
// })
it('TC_03: Request Body JSON Format hasnt value parameter',()=>{
  cy.postData(HttpMethod.POST,GlobalConstants.userApi,BodyNotHaveValue).then(res=>{
    expect(res.status).to.eq(200);
    expect(res.body).to.eql(Expectedresponse);
    cy.log(JSON.stringify(res.body));
    cy.getData(HttpMethod.GET,GlobalConstants.userApi).then(res=>{
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
        expect(res.body.value).to.eql(BodyNotHaveValue.value)
    }) 
  })
  
})
it('TC_04: Request Body JSON Format has value parameter that corrects json format and is array',()=>{
  cy.postData(HttpMethod.POST,GlobalConstants.userApi,bodyDataHaveFormatValueIsArray).then(res=>{
    expect(res.status).to.eq(200);
    expect(res.body).to.eql(Expectedresponse);
    cy.getData(HttpMethod.GET,GlobalConstants.userApi).then(res=>{
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
        expect(res.body.value).to.eql(bodyDataHaveFormatValueIsArray.value)
    })
    
  })
})
it('TC_05: Request Body JSON Format has value parameter that corrects json format and is object',()=>{
  cy.postData(HttpMethod.POST,GlobalConstants.userApi,bodyDataHaveFormatValueIsObject).then(res=>{
    expect(res.status).to.eq(200);
    expect(res.body).to.eql(Expectedresponse);
    cy.getData(HttpMethod.GET,GlobalConstants.userApi).then(res=>{
        cy.log(JSON.stringify(res.body));
        expect(res.status).to.eq(200);
        expect(res.body.value).to.eql(bodyDataHaveFormatValueIsObject.value)
    })
    
  })
})
//Cai nay cho sang delete 
xit('TC_06: Send requests with other methods DELETE',()=>{
  cy.postData(HttpMethod.DELETE,GlobalConstants.userApi,bodyDataHaveFormatValueIsArray).then(res=>{
    expect(res.status).to.eq(200);
    expect(res.body).to.eql(Expectedresponse);
    
  })
})
   
   
    
})