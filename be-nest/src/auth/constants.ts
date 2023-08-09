import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export const jwtConstants: { [key: string]: string } = {
  secret: process.env.JWT_SALT,
};
