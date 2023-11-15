import { Controller } from "@nestjs/common";

@Controller()
export class UserController{

    public ListUsers(): User[] {
        var users: User[] = [];

        return users;

    }
}