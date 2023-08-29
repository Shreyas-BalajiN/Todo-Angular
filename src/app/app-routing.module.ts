import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosParentComponent } from './components/todos-parent/todos-parent.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'', component:TodosParentComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
