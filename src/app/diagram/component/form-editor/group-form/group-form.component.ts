import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, Form } from '@angular/forms';

@Component({
  selector: 'group-form',
  standalone: false,
  templateUrl: './group-form.component.html',
  styleUrl: './group-form.component.scss'
})
export class GroupFormComponent {

  @Input("form")
  groupForm: FormGroup | null;

  @Input("index")
  index: number;

  // componentsFormArray: FormArray<FormGroup>;

  constructor(private fb: FormBuilder){
    // this.componentsFormArray = this.groupForm.get("components") as FormArray;
  }

  addComponent(){
    const compForm =  this.fb.group({
                id: [null, Validators.required],
                ref: [null],
                type: [null, Validators.required],
                name: [null, Validators.required],
                desc: [null],
                tags: [[], Validators.required]
    });
    let fa:FormArray = this.groupForm.get('components') as FormArray;
    fa.push(compForm);
  }
}
