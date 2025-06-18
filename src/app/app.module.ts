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
import { NotDetailComponent } from './not-detail/not-detail.component';
import { RectorComponent } from './service/rector/rector.component';
import { StudentComponent } from './service/student/student.component';
import { HomeComponent } from './service/home/home.component';
import { NoteComponent } from './rector/note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    RectorComponent,
    StudentComponent,
    HomeComponent,
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
   NotDetailComponent,
      NoteComponent,
],
  providers: [ Service, ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
