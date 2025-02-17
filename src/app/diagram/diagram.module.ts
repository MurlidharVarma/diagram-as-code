import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { DiagramRoutingModule } from './diagram-routing.module';
import { BoxComponent } from './component/box/box.component';
import { BoxGroupComponent } from './component/box-group/box-group.component';
import { DiagramService } from './service/diagram.service';
import { HttpClientModule } from '@angular/common/http';
import { DiagramComponent } from './component/diagram/diagram.component';
import { EditorComponent } from './component/editor/editor.component';
import { StoreService } from './service/store.service';
import { JsonEditorComponent } from './component/json-editor/json-editor.component';
import { FormEditorComponent } from './component/form-editor/form-editor.component';


@NgModule({
  declarations: [
    BoxComponent,
    BoxGroupComponent,
    DiagramComponent,
    EditorComponent,
    JsonEditorComponent,
    FormEditorComponent,
  ],
  imports: [
    CommonModule,
    DiagramRoutingModule,
    HttpClientModule
  ],
  providers:[
    DiagramService,
    StoreService,
    JsonPipe
  ],
})
export class DiagramModule { }
