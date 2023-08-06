import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './Note.entity';
import { NotePatch } from './NotePatch.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Note]),
    TypeOrmModule.forFeature([NotePatch]),
  ],
  providers: [NotesService],
  controllers: [NotesController],
})
export class NotesModule {}
