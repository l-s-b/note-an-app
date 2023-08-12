import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListPage } from './pages/notes-list/notes-list.component';
import { MainSpaceComponent } from './pages/main-space/main-space.component';
import { SearchbarComponent } from './comps/searchbar/searchbar.component';
import { EditNotePage } from './pages/edit-note/edit-note.component';
import { NoteDetailPage } from './pages/note-detail/note-detail.component';
import { NewNotePage } from './pages/new-note/new-note.component';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NoteCardComponent } from './comps/note-card/note-card.component';
import { HttpClientModule } from '@angular/common/http';
import { Note404Component } from './comps/note404/note404.component';
import { LoginPage } from './pages/login/login.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainSpaceComponent,
    EditNotePage,
    NoteDetailPage,
    NewNotePage,
    NotFoundPage,
    NoteListPage,
    Note404Component,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    SearchbarComponent,
    NoteCardComponent,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
