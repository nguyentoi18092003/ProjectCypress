**Cách built 1 framework cypress trên typescript**
1. Gõ câu lệnh **npm init -y** , sau khi gõ xong sẽ sinh ra 1 file **package.json**
2. Gõ câu lệnh **npm install cypress --save-dev** để cài đặt thư viện cypress
3. Gõ câu lệnh **npx cypress open** để mở cypress lên, sau khi mở xong sẽ sinh ra thư mục **cypress**, trong thư mục cypress chứa 2 thư mục con là **fixture** và **report**, và thêm 1 file **cypress.config.js**
4. Vào file **cypress.config.js** chỉnh sửa đường dẫn để chạy test bằng cách thêm câu lệnh sau **specPattern:"./cypress/Testcase/Home/**.*"** đường dẫn này sẽ tùy theo cấu hình của mình
5. **=> Đến đây coi như là cấu hình xong 1 dự án cypress**
6. Copy file **tsconfig.json**
7. Vào file **tsconfig.json** chỉnh sửa đường dẫn nơi mà mình biên dịch file ts ở câu lệnh **"include": ["cypress/**/*.ts"]**, tùy theo cấu hình dự án mà mình thay đổi cho thích hợp
8. Cài nốt 2 thư viện của typescript và cypress buitl trên typescript: **npm install @types/cypress --save-dev** và **npm install typescript --save-dev**
9. Viết 1 test mẫu
10. Chạy test bằng câu lệnh **npx cypress open**

**Cách cài đặt xpath trong cypress, typescript**
1. Gõ câu lệnh **npm install -D cypress-xpath**

2. Vào **cypress/support/commands.ts** import thư viện **import 'cypress-xpath'**
 vào , nhớ đổi file thành ts=))

**Sua file e2s.js thanh e2e.ts**
1. Sửa file e2e.js-> e2e.ts
2. Vào file **cypress.config.js**  thêm **supportFile: './cypress/support/e2e.ts'** để cho project hiểu support file bây giờ là e2e.ts chứ không phải e2e.js vì nếu mình không vào cấu hình vị trí cho supportFile thì nó mặc đinh là e2e.js, nên khi mk đổi thành ts thì mk phải vào cấu hình lại
3.  => **Chú ý**: Muốn dùng các file ví dụ commands để viết các hàm toàn cục thì nhớ import các file này vào file e2e.ts :>>>


**Để cấu hình report:**
1.  **Tải thư viện** 
+) **marge, mochawesome , mochawesome-merge , rimraf (xóa report)**
2.  Vào file **package.json** thêm vào **script**
    **"test:mocha-reporter": "cypress run --reporter mochawesome --reporter-options reportDir=results,overwrite=false,html=false,json=true",
    "merge-report": "mochawesome-merge results/*.json > mochawesome.json",
    "build-report": "marge mochawesome.json",
    "clean-reports": "rimraf results mochawesome.json",
    "test:full-report": "npm run clean-reports && npm run test:mocha-reporter && npm run merge-report && npm run build-report"**
3.  Vào file **cypress.config.js**
    **screenshotOnRunFailure: true,
    screenshotsFolder: "./screenshots"**

4. Bước 4: Thêm vào gitignore
    **results/
    mochawesome-report/
    screenshots/**

=> Run sử dụng câu lệnh:  **npm run test:full-report**
