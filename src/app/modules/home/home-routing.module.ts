import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signin', component: SigninPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
