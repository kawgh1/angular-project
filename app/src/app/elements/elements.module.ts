import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsComponent } from './elements.component';
import { ElementsRoutingModule } from './elements-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  declarations: [ElementsComponent]
})
export class ElementsModule { }
