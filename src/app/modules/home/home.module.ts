import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SmartHomeComponent } from './components/feature/smart-home/smart-home.component';
import { DumbHomeComponent } from './components/ui/dumb-home/dumb-home.component';
import { SmartLogInComponent } from './components/feature/smart-log-in/smart-log-in.component';
import { DumbLogInComponent } from './components/ui/dumb-log-in/dumb-log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmartSignInComponent } from './components/feature/smart-sign-in/smart-sign-in.component';
import { DumbSignInComponent } from './components/ui/dumb-sign-in/dumb-sign-in.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SmartHomeComponent,
    DumbHomeComponent,
    SmartLogInComponent,
    DumbLogInComponent,
    SmartSignInComponent,
    DumbSignInComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
