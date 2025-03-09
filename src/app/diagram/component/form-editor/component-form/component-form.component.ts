import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ComponentTypeService } from '../../../service/master/component-type.service';
import { ComponentTagsService } from '../../../service/master/component-tags.service';

@Component({
  selector: 'component-form',
  standalone: false,
  templateUrl: './component-form.component.html',
  styleUrl: './component-form.component.scss'
})
export class ComponentFormComponent implements OnInit{

  @Input("form")
  componentForm: FormGroup | null;

  @Input("index")
  index: number;

  types: [];
  tags: [];
  tagsForm: FormArray;

  constructor(private fb: FormBuilder, private componentTypeService: ComponentTypeService, private componentTagsService:ComponentTagsService){}

  ngOnInit(): void {
    this.componentTypeService.componentTypes.subscribe(data =>{
      this.types = data;
    });

    this.componentTagsService.componentTags.subscribe(data =>{
      this.tags = data;
      this.tagsForm = this.fb.array(
        data.map(x => (this.componentForm.get("tags").value).indexOf(x.id) > -1)
      );
    });
  }

  // convertToValue(key: string) {
  //   return this.form.value[key]
  //     .map((x, i) => x && this[key][i])
  //     .filter(x => !!x);
  // }

  updateTags(event,idx, tag){

    this.tagsForm.controls[idx].setValue(!this.tagsForm.controls[idx].value);
    let tagFormValues = this.tagsForm.value;
    let selectedValues = []
    for(let i=0;i<this.tags.length;i++){
      if(tagFormValues[i]){
        selectedValues.push(this.tags[i]['id']);
      }
    }
    this.componentForm.patchValue({"tags":selectedValues});

  }

}
