import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';
import { IsString, MinLength } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ unique: true })
  @MinLength(3)
  @IsString()
  username: string;

  @Column()
  @MinLength(6)
  @IsString()
  password: string;

  @Column({ nullable: true })
  jwt: string;
}
