import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';
ConfigModule.forRoot();

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async onModuleInit() {
    let testUser: User = await this.findUser('test-user');

    if (!testUser) {
    testUser = new User();
      testUser.username = "test-user";
      testUser.password = "test-pass";
      await this.createUser(testUser);
    }
  }

  async createUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async findUser(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username: username } });
  }

  async findUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
