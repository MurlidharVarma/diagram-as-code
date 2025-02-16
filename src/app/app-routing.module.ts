import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [    
  {
    path: "diagram", 
    loadChildren: ()=>import("./diagram/diagram.module").then(m=>m.DiagramModule)
  },
  {
    path:"", 
    pathMatch:"full", 
    redirectTo:"/diagram"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
