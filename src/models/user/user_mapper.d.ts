import User from './user_model'
class UserReqeust implements User{
    name: string;
    password: string;

    constructor( data:any) {
        this.name = data['name'] || "";
        this.password = data['password'] || "";
    }

    static factoryJson() {
        return this;
    }
}