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
import { Note } from './Note.entity';
import { NotePatch } from './NotePatch.entity';
import { NotesService } from './notes.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  findAll() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.notesService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() note: Note) {
    return this.notesService.createNote(note);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async editNote(
    @Body()
    note: NotePatch,
    @Param('id') id: number,
  ): Promise<Note> {
    const noteEdited = await this.notesService.editNote(id, note);
    return noteEdited;
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.notesService.remove(id);
  }
}
