import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentPageComponent } from './student/student-page/student-page.component';
import { RectorPageComponent } from './rector/rector-page/rector-page.component';
import { Service } from './user/service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    StudentPageComponent,
    RectorPageComponent,
    DashboardComponent,
     HttpClientModule,
],
  providers: [ Service, ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
