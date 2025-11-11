import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // 1. IMPORT IT

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
     DashboardComponent // 2. DECLARE IT HERE
  ]
})
export class AdminModule { }
