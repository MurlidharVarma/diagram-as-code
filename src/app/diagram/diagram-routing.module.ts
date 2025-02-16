import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagramComponent } from './component/diagram/diagram.component';
import { EditorComponent } from './component/editor/editor.component';

const routes: Routes = [
  { path: "", component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagramRoutingModule { }
