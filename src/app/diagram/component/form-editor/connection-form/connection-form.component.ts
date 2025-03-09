import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'connection-form',
  standalone: false,
  templateUrl: './connection-form.component.html',
  styleUrl: './connection-form.component.scss'
})
export class ConnectionFormComponent {
  @Input("form")
  connectionForm: FormGroup | null;

  @Input("index")
  index: number;
  
  constructor(private fb: FormBuilder){}
}
