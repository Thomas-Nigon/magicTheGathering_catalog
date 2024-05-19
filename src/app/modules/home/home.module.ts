import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SmartHomeComponent } from './components/feature/smart-home/smart-home.component';
import { DumbHomeComponent } from './components/ui/dumb-home/dumb-home.component';

@NgModule({
  declarations: [HomepageComponent, SmartHomeComponent, DumbHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
