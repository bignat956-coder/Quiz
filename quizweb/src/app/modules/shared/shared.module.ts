import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DemoNgZoroAntdModule } from '../../DemoNgZorroAntdModule';
// 1. Import the Icon Module and the specific icons
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserOutline, LockOutline, MailOutline } from '@ant-design/icons-angular/icons';
import { NzSelectModule } from 'ng-zorro-antd/select'; 
const icons = [UserOutline, LockOutline, MailOutline];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    DemoNgZoroAntdModule,
    // 3. Register the icons here using 'forChild'
    NzIconModule.forChild(icons),
     NzSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    DemoNgZoroAntdModule,
     NzIconModule,
      NzSelectModule
  
  ],
})
export class SharedModule {}
