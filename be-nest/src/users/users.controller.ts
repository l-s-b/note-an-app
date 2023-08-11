import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { User } from './User.entity';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post() // Sign up
  create(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  /* TODO
  @UseGuards(AuthGuard)
  @Patch()
  async patch(@Body() user: UserPatch): Promise<User> {
    const patchedUser = await this.usersService.editUser(id, user);
    return patchedUser;
  } */

  /* TODO
  @UseGuards(AuthGuard)
  @Delete()
  remove(@Body() user: UserPatch) {
    this.usersService.remove(user);
  } */
}
