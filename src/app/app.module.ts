import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SmartNavbarComponent } from './components/feature/smart-navbar/smart-navbar.component';
import { DumbNavbarComponent } from './components/ui/dumb-navbar/dumb-navbar.component';

@NgModule({
  declarations: [AppComponent, SmartNavbarComponent, DumbNavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
