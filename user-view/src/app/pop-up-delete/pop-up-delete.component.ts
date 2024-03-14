import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-delete',
  templateUrl: './pop-up-delete.component.html',
  styleUrl: './pop-up-delete.component.css'
})

export class PopUpDeleteComponent {
  @Input() opcTrue!:() => void;
  @Input() opcFalse!: () => void;
}
