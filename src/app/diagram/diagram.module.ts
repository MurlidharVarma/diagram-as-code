import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { DiagramRoutingModule } from './diagram-routing.module';
import { BoxComponent } from './component/box/box.component';
import { BoxGroupComponent } from './component/box-group/box-group.component';
import { DiagramService } from './service/diagram.service';
import { HttpClientModule } from '@angular/common/http';
import { DiagramComponent } from './component/diagram/diagram.component';
import { EditorComponent } from './component/editor/editor.component';


@NgModule({
  declarations: [
    BoxComponent,
    BoxGroupComponent,
    DiagramComponent,
    EditorComponent,
  ],
  imports: [
    CommonModule,
    DiagramRoutingModule,
    HttpClientModule
  ],
  providers:[
    DiagramService,
    JsonPipe
  ],
})
export class DiagramModule { }
