import { HeaderObject } from "../pageObject/HeaderPageObject";
import { LoginPageObject } from "../pageObject/LoginPageObject";

export class PageGeneratorManager {
    // Phương thức static để lấy AddEmployeePageObject
    public static getloginPage(): LoginPageObject {
        return new LoginPageObject ();
    }
    public static getHeaderPage(): HeaderObject {
        return new HeaderObject ();
    }
};