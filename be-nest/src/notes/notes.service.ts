import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { Note } from './Note.entity';
import { NotePatch } from './NotePatch.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private notesRepository: Repository<Note>,
  ) {}

  async getNotes(): Promise<Note[]> {
    return await this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    const foundOne = await this.notesRepository.findOne({ where: { id: id } });
    if (foundOne === null) {
      throw new NotFoundException('Note not found.');
    }
    return foundOne;
  }

  async createNote(note: Note) {
    const errors = await validate(note);
    if (errors.length > 0) {
      throw new Error(`Note post validation error!`);
    } else {
      this.notesRepository.save(note);
    }
  }

  async remove(id: string): Promise<void> {
    await this.notesRepository.delete(id);
  }

  async editNote(id: number, note: NotePatch): Promise<Note> {
    const noteToEdit = await this.notesRepository.findOne({
      where: { id: id },
    });
    if (noteToEdit === null) {
      throw new NotFoundException('Note was not found');
    }
    if (note.description) {
      noteToEdit.description = note.description;
    }
    if (note.title) {
      noteToEdit.title = note.title;
    }
    await noteToEdit.save();
    return noteToEdit;
  }
}
