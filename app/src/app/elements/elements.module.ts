import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  declarations: [ElementsHomeComponent, PlaceholderComponent],
  // exports: [ElementsHomeComponent]
})
export class ElementsModule { }
