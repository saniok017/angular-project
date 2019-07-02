import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'register', loadChildren: () => import('./registration/registration.component').then(mod => mod.RegistrationComponent)},
  { path: 'login', loadChildren: () => import('./login/login.component').then(mod => mod.LoginComponent)},
  { path: 'main', loadChildren: () => import('./main/main.component').then(mod => mod.MainComponent) },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
