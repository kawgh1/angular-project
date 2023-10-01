import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonDirective } from './shared/directives/button.directive';
import { AvatarDirective } from './shared/directives/avatar.directive';
import { ClickLogDirective } from './shared/directives/clickLog.directive';
import { HelloComponent } from './shared/hello/hello.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      ButtonDirective,
      AvatarDirective,
      ClickLogDirective,
      HelloComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonDirective,AvatarDirective,ClickLogDirective]
})
export class AppModule { }
