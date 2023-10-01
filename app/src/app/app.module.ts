import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonDirective } from './shared/directives/button.directive';
import { AvatarDirective } from './shared/directives/avatar.directive';
import { ClickLogDirective } from './shared/directives/clickLog.directive';
import { HelloComponent } from './shared/hello/hello.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [							
    AppComponent,
      HeaderComponent,
      ButtonDirective,
      AvatarDirective,
      ClickLogDirective,
      HelloComponent,
      HomeComponent,
      NotFoundComponent
   ],
   // AppRoutingModule contains default routing behavior and should be last
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonDirective,AvatarDirective,ClickLogDirective]
})
export class AppModule { }
