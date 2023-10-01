import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CollectionsRoutingModule } from './collections-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  declarations: [CollectionsHomeComponent],
  // exports: [CollectionsHomeComponent]
})
export class CollectionsModule { }
