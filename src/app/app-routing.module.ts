import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
  { path: 'idareci/dashboard', loadComponent: () => import('./rector/rector-page/rector-page.component').then(m => m.RectorPageComponent) },
  { path: 'ogrenci/dashboard', loadComponent: () => import('./student/student-page/student-page.component').then(m => m.StudentPageComponent) },
  { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
  { path: 'change-password', loadComponent: () => import('./auth/change-password/change-password.component').then(m => m.ChangePasswordComponent) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'student', loadComponent: () => import('./student/student-page/student-page.component').then(m => m.StudentPageComponent) },
  { path: 'rector', loadComponent: () => import('./rector/rector-page/rector-page.component').then(m => m.RectorPageComponent) },
  { path: 'note/:id', loadComponent: () => import('./not-detail/not-detail.component').then(m => m.NotDetailComponent) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
