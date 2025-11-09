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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      // Form is valid, show success
      console.log('Form data is valid:', this.validateForm.value);
      this.message.success('Registration Successful!');

      // Navigate to the login page
      this.router.navigate(['/login']);

    } else {
      // Form is invalid, show errors
      console.log('Form is invalid');
      
      // This loop marks all fields as "touched" to show error messages
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      
      this.message.error('Please correct the errors in the form.');
    }
  }
}
