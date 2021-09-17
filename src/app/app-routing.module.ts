import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedComponent } from './selected/selected.component';

const routes: Routes = [
  {path : ":index", component: SelectedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
