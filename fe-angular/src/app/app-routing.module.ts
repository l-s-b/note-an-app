import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSpaceComponent } from './pages/main-space/main-space.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NoteDetailComponent } from './pages/note-detail/note-detail.component';
import { EditNoteComponent } from './pages/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: '',
    component: MainSpaceComponent,
    children: [
      { path: '', component: NotesListComponent },
      { path: ':id', component: NoteDetailComponent },
      { path: 'edit/:id', component: EditNoteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
