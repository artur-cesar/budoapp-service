import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private UserService: UsersService) {}

    async signIn(username: string, pass: string) {
        
    }
}
