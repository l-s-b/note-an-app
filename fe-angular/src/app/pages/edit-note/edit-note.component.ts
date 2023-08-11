import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DetailLoader } from 'src/app/comps/detail-loader.component';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNotePage extends DetailLoader implements OnInit {

  override ngOnInit() {
    super.ngOnInit();
  }

  onSubmit(form: NgForm) {
    form.form.value.id = this.foundNote!.id;
    this.patchNote(form.form.value);
  }

  patchNote = (note: Note) => {
    this.httpService.patchNote(note).subscribe(
      () => { this.router.navigate(['/']); },
      (error) => {
        this.authService.catchAuthErrors(null);
        console.log('Note Edit failure:\n' + JSON.stringify(error));
      } 
    );
  }

  private handleHttpError(error: any): void {
    this.authService.catchAuthErrors(null);
    console.log('HTTP request error:\n' + JSON.stringify(error));
  }

}
