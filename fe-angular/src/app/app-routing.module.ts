import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSpaceComponent } from './pages/main-space/main-space.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';
import { NewNoteComponent } from './pages/new-note/new-note.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainSpaceComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: 'detail/:id', component: NoteDetailComponent },
      { path: 'new', component: NewNoteComponent },
      { path: 'edit/:id', component: EditNoteComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
