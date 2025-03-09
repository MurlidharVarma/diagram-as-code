import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-editor',
  standalone: false,
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent {

  specForm: any;

  constructor(private fb: FormBuilder){
    this.specForm = this.fb.group({
      meta: this.fb.group({
        title: [null, Validators.required],
        createdOn: [new Date()],
        updatedOn:[new Date()],
        updatedBy: [null, Validators.required]
      }),
      groups: this.fb.array([]),
      connections: this.fb.array([])
    });
  }

  addGroup(){
    const groupForm = this.fb.group({
      name: [null, Validators.required],
      desc: [null],
      components: this.fb.array([])
    });
    let fa: FormArray = this.specForm.get("groups");
    fa.push(groupForm);
  }
}
