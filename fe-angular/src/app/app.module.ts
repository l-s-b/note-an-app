import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainSpaceComponent } from './pages/main-space/main-space.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainSpaceComponent,
    EditNoteComponent,
    NoteDetailComponent,
    NewNoteComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NotesListComponent,
    SearchbarComponent,
    NoteCardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
