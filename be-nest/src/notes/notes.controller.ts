import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Note } from './Note.entity';
import { NotePatch } from './NotePatch.entity';
import { NotesService } from './notes.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApiParam } from '@nestjs/swagger/dist';

@ApiTags('Notes')
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.notesService.getNotes();
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() note: Note) {
    return this.notesService.createNote(note);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Put(':id')
  async editNote(
    @Body()
    note: NotePatch,
    @Param('id') id: number,
  ): Promise<Note> {
    const noteEdited = await this.notesService.editNote(id, note);
    return noteEdited;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.notesService.remove(id);
  }
}
