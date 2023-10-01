import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CollectionsRoutingModule } from './collections-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  declarations: [CollectionsComponent]
})
export class CollectionsModule { }
