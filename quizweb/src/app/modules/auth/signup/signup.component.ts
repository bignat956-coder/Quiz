import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

// Import required NG-ZORRO modules
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select'; // <-- 1. IMPORT THIS
import { AuthService } from '../services/auth';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // For [formGroup] and formControlName
    RouterLink,          // For routerLink="/login"
    
    // NG-ZORRO Modules
    NzFormModule,        // For nz-form-item, nz-form-control, nzErrorTip
    NzInputModule,       // For nz-input
    NzButtonModule,
     NzSelectModule      // For nz-button
  ],
  templateUrl: './signup.html', // Points to your 'signup.html' file
  styleUrls: ['./signup.scss']
})
export class SignupComponent implements OnInit {

  // Added '!' to fix the initialization error
  validateForm!: FormGroup; 

  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
  }

  submitForm(): void {
   this.authService.register(this.validateForm.value).subscribe((res)=>{
  this.message
    .success(
      'Signup successful',
      { nzDuration: 5000 }
    );
  this.router.navigateByUrl("/login");
}, error=>{
  this.message
    .error(
      `${error.error}`,
      { nzDuration: 5000 }
    )
})

  }
}
