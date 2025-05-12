import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private userService = inject(UserService);

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      const { email, password } = this.loginForm.value;
      this.userService.login(email, password).subscribe(() => {
        console.log('Login successful');
        this.router.navigate(['/kanban']);

      }, (error)=> {
        console.error('Login failed', error);
        this.loginForm.setErrors({ serverError: 'Invalid email or password'});
      })
    } else {
      this.loginForm.markAllAsTouched();
    }

  }

  get f() {
    return this.loginForm.controls;
  }

}
