import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent {

    
    // 1. ADD THIS ARRAY
      classList: string[] = ['JSS1', 'JSS2', 'JSS3', 'SSS1', 'SSS2', 'SSS3'];
  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) { }

  validateForm!: FormGroup;

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
           
      // 2. ADD THE NEW FORM CONTROL
      studentClass: [null, [Validators.required]] 
    })
  }

  submitForm() {


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