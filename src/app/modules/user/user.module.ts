import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './pages/user/user.component';
import { SmartUserComponent } from './components/feature/smart-user/smart-user.component';
import { DumbUserComponent } from './components/ui/dumb-user/dumb-user.component';


@NgModule({
  declarations: [
    UserComponent,
    SmartUserComponent,
    DumbUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
