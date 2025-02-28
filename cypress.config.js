const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      supportFile: './cypress/support/e2e.ts'
    },
    //intercept-api
    //test-api
    specPattern:"./cypress/Testcase/test-api/**.*",
    //test-ui
    // specPattern:"./cypress/Testcase/test-ui/NxG Auth/**.*",
    //npx cypress run --spec cypress/Testcase/test-ui/CommonLogin.ts => Chay 1 file
    // npx cypress run --spec cypress/Testcase/test-ui/CommonLogin.ts, cypress/**/test-ui/**.* => chay 1 file Commonlogin +voi 1 thu muc hoac 1 file nao do
    
  },
});
