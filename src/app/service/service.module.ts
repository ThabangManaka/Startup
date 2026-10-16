import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './containers/service/service.component';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import { ServiceRoutingModule } from './service-routing.module';



@NgModule({
  declarations: [
    ServiceComponent,
    SoftwareDevelopmentComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
