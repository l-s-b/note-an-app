import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

ConfigModule.forRoot();
const typeormParams: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER1_NAME,
  password: process.env.MYSQL_USER1_PASS,
  database: process.env.MYSQL_DBNAME,
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormParams),
    NotesModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
