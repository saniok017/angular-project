import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import { StateService } from './state.service';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
