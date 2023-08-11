import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    if (user === undefined) {
      throw new UnauthorizedException('WRONG_USERNAME');
    }
    if (user?.password !== pass) {
      throw new UnauthorizedException('WRONG_PASSWORD');
    }
    const payload = { username: user.username };
    const token = await this.jwtService.signAsync(payload);
    user.jwt = token; // STORE/UPDATE JWT IN DB
    user.save(); // SAVE DB STORAGE!
    return { access_token: token };
  }

  async getToken(username: string): Promise<any> {
    const user = await this.usersService.findUser(username);
    console.log('RETURNING ONLY JWT: ', user.jwt);
  }
}
