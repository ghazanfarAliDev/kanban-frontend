import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';



export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // If controls haven't been initialized yet, or values are empty, don't validate yet
  if (!password || !confirmPassword || !password.value || !confirmPassword.value) {
    return null;
  }

  // Return error object if they don't match, otherwise null
  return password.value === confirmPassword.value ? null : { passwordsMismatch: true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  signupForm!: FormGroup;
  
  private fb = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: passwordsMatchValidator
    });
  }

  get f(){
    return this.signupForm.controls;
  }
  get passwordMismatchError() {
    return this.signupForm.errors?.['passwordsMismatch'] &&
           this.signupForm.get('confirmPassword')?.touched;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.router.navigate(['/user/login']);
    }else{
      this.signupForm.markAllAsTouched();
    }
   }

}
