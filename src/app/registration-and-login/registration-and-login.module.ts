import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationAndLoginRoutingModule } from './registration-and-login-routing.module';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    RegistrationAndLoginRoutingModule
  ]
})
export class RegistrationAndLoginModule { }
