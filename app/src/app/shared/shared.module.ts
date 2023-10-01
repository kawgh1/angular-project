import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonDirective } from './directives/button.directive';
import { AvatarDirective } from './directives/avatar.directive';
import { ClickLogDirective } from './directives/clickLog.directive';
import { HelloComponent } from './hello/hello.component';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [							
      HeaderComponent,
      ButtonDirective,
      AvatarDirective,
      ClickLogDirective,
      HelloComponent,
     
   ],
   // AppRoutingModule contains default routing behavior and should be last
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [ButtonDirective,AvatarDirective,ClickLogDirective, HeaderComponent, HelloComponent]
})
export class SharedModule { }