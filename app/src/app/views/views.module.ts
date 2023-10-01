import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import {ViewsRoutingModule} from './views-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  declarations: [ViewsComponent]
})
export class ViewsModule { }
