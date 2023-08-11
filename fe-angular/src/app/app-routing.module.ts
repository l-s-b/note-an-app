import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSpaceComponent } from './pages/main-space/main-space.component';
import { NoteListPage } from './pages/notes-list/notes-list.component';
import { NoteDetailPage } from './pages/note-detail/note-detail.component';
import { EditNotePage } from './pages/edit-note/edit-note.component';
import { NewNotePage } from './pages/new-note/new-note.component';
import { NotFoundPage } from './pages/not-found/not-found.component';
import { LoginPage } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: MainSpaceComponent,
    children: [
      { path: '', component: NoteListPage },
      { path: 'login', component: LoginPage },
      { path: 'detail/:id', component: NoteDetailPage },
      { path: 'new', component: NewNotePage },
      { path: 'edit/:id', component: EditNotePage },
      { path: '**', component: NotFoundPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
