import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CardComponent } from './card/card.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminGuardGuard } from '../guards/admin-guard.guard';
import { CardsMainComponent } from '../cards-main/cards-main.component';
 
const routes: Routes = [
    { path: 'card', canActivate: [adminGuardGuard], component: CardComponent },
    { path: 'cards', canActivate: [adminGuardGuard], component: CardsMainComponent },
    { path: 'dashboard', canActivate: [adminGuardGuard], component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }