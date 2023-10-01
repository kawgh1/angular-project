import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  declarations: [ElementsHomeComponent, PlaceholderComponent],
  // exports: [ElementsHomeComponent]
})
export class ElementsModule { }
