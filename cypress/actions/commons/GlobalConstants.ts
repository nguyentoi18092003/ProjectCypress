export class GlobalConstants{
    public static  LoginURL: string ="https:";
    public static userAPI: string="https:";

    public static listRoleNotHaveGroupApi: string="https:"
    public static listRoleHaveGroupApi = (group: string): string => {
        return `https://cth/roles?group=${group}`;
    };
    public static userApi="https://clousers";
    public static login_UserApi: string="https://clousers"

    public static userAPI_inter: string="httpsd36c032e72";

}