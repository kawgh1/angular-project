import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { CollectionsRoutingModule } from './collections-routing.module';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  declarations: [CollectionsHomeComponent, TableComponent, TabsComponent],
  // exports: [CollectionsHomeComponent]
})
export class CollectionsModule { }
