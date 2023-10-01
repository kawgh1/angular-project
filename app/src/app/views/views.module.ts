import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import {ViewsRoutingModule} from './views-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ViewsHomeComponent } from './views-home/views-home.component';

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ],
  declarations: [ViewsComponent, ViewsHomeComponent]
})
export class ViewsModule { }
