import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: process.env.AUTH_USER1_NAME,
      password: process.env.AUTH_USER1_PASS,
    },
    {
      userId: 2,
      username: process.env.AUTH_USER2_NAME,
      password: process.env.AUTH_USER2_PASS,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
