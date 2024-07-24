import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OPERATIONTOOLSComponent } from './operationtools/operationtools.component';

const routes: Routes = [
  {path: 'operationtools', component: OPERATIONTOOLSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
