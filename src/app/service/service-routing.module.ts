import { ServiceComponent } from './containers/service/service.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';




const routes: Routes = [
  {
    path: '',
    component: ServiceComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ServiceRoutingModule {
}
