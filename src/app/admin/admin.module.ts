import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    CardComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MenubarModule,
    DynamicDialogModule
  ]
})
export class AdminModule { }
