import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'meta-form',
  standalone: false,
  templateUrl: './meta-form.component.html',
  styleUrl: './meta-form.component.scss'
})
export class MetaFormComponent {

  @Input("form")
  metaForm: FormGroup | null;

  constructor(private fb: FormBuilder){}
}
