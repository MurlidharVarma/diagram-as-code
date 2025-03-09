import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiagramService } from '../../service/diagram.service';

@Component({
  selector: 'app-form-editor',
  standalone: false,
  templateUrl: './form-editor.component.html',
  styleUrl: './form-editor.component.scss'
})
export class FormEditorComponent implements OnInit{

  specForm: any;

  constructor(private fb: FormBuilder,private service: DiagramService){
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
  
  ngOnInit(): void {
    this.service.getSpec$().subscribe(spec=>{
      let specD = JSON.stringify(spec);
      let specF = JSON.stringify(this.specForm.value);

      if(specD != specF){
        spec.groups.forEach((e,ei)=>{
          this.addGroup();
          let form = this.specForm.controls.groups.controls[ei];

          e.components.forEach((c,ci)=>{
            this.addComponent(form);
          })
        })

        spec.connections.forEach((n,ni)=>{
          this.addConnection();
        });
        this.specForm.reset(spec);
        console.log(this.specForm.value);
      }
    });

    this.specForm.valueChanges.subscribe(form => {
      if(this.specForm.valid){
        this.service.updateSpec(this.specForm.value);
      }
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

  addConnection(){
    const connForm = this.fb.group({
      src: [null, Validators.required],
      dest: [null],
      bidirectional: [false],
      icons:[[]]
    });
    let fa: FormArray = this.specForm.get("connections");
    fa.push(connForm);
  }

  deleteConnection(idx){
    let val = this.specForm['controls']['connections'].value;
    this.specForm['controls']['connections']['controls'].splice(idx,1);
    val.splice(idx,1);
    this.specForm['controls']['connections'].reset(val);
  }

  addComponent(groupForm:FormGroup){
    const compForm =  this.fb.group({
                id: [null, Validators.required],
                ref: [null],
                type: [null, Validators.required],
                name: [null, Validators.required],
                desc: [null],
                tags: [[], Validators.required]
    });
    let fa:FormArray = groupForm.get('components') as FormArray;
    fa.push(compForm);
  }
}
