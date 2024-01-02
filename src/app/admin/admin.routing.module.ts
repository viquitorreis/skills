import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CardComponent } from './card/card.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminGuardGuard } from '../guards/admin-guard.guard';
 
const routes: Routes = [
    { path: 'user', component: CardComponent },
    { path: 'dashboard', canActivate: [adminGuardGuard], component: AdminDashboardComponent },
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }