import { BaseEntity, Column } from 'typeorm';

export class NotePatch extends BaseEntity {
  @Column({ length: 150 })
  title?: string;

  @Column()
  description?: string;
}
