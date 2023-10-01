import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModsComponent } from './mods.component';
import { ModsRoutingModule } from './mods-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModsRoutingModule
  ],
  declarations: [ModsComponent]
})
export class ModsModule { }
