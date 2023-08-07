import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
  standalone: true,
  imports: [MatIconModule]
})
export class NoteCardComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  constructor(private renderer: Renderer2) {}
  
  ngOnInit() {
   
  }

}
