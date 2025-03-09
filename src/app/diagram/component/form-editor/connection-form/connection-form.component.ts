import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ComponentIdsService } from '../../../service/master/component-ids.service';
import { ConnectionIconsService } from '../../../service/master/connection-icons.service';

@Component({
  selector: '[connection-form]',
  standalone: false,
  templateUrl: './connection-form.component.html',
  styleUrl: './connection-form.component.scss'
})
export class ConnectionFormComponent implements OnInit{
  @Input("form")
  connectionForm: FormGroup | null;

  @Input("index")
  index: number;

  @Output("delete")
  deleteConnection: EventEmitter<number> = new EventEmitter();
  
  componentIds: [];
  icons: [];
  iconsForm: FormArray;

  constructor(private fb: FormBuilder, private componentIdsService: ComponentIdsService, private connectionIconsService:ConnectionIconsService){}

  ngOnInit(): void {
    this.componentIdsService.componentIds.subscribe(data=>{
      this.componentIds = data;
    });

    this.connectionIconsService.connectionIcons.subscribe(data =>{
      this.icons = data;
      this.iconsForm = this.fb.array(
        data.map(x => (this.connectionForm.get("icons").value) && (this.connectionForm.get("icons").value).indexOf(x.id) > -1)
      );
    });
  }

  delete(idx){
    this.deleteConnection.emit(idx);
  }


  updateIcons(event,idx, tag){

    this.iconsForm.controls[idx].setValue(!this.iconsForm.controls[idx].value);
    let iconFormValues = this.iconsForm.value;
    let selectedValues = []
    for(let i=0;i<this.icons.length;i++){
      if(iconFormValues[i]){
        selectedValues.push(this.icons[i]['id']);
      }
    }
    this.connectionForm.patchValue({"icons":selectedValues});

  }
}
