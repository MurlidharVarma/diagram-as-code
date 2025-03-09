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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFormComponent } from './component/form-editor/component-form/component-form.component';
import { ConnectionFormComponent } from './component/form-editor/connection-form/connection-form.component';
import { MetaFormComponent } from './component/form-editor/meta-form/meta-form.component';
import { GroupFormComponent } from './component/form-editor/group-form/group-form.component';
import { ComponentTypeService } from './service/master/component-type.service';
import { ComponentTagsService } from './service/master/component-tags.service';
import { ComponentIdsService } from './service/master/component-ids.service';


@NgModule({
  declarations: [
    BoxComponent,
    BoxGroupComponent,
    DiagramComponent,
    EditorComponent,
    JsonEditorComponent,
    FormEditorComponent,
    ComponentFormComponent,
    ConnectionFormComponent,
    MetaFormComponent,
    GroupFormComponent,
    ConnectionFormComponent
  ],
  imports: [
    CommonModule,
    DiagramRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    DiagramService,
    StoreService,
    ComponentTypeService,
    ComponentTagsService,
    ComponentIdsService,
    JsonPipe
  ],
})
export class DiagramModule { }
