import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NotFound404Component } from './views/not-found-404/not-found-404.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { adminGuardGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  { path: 'admin', canActivate: [adminGuardGuard], component: AdminDashboardComponent, 
    children: [
      { path: 'dashboard', canActivate: [adminGuardGuard], component: AdminDashboardComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
