import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './login-page/login-page.module';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    LoginPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
