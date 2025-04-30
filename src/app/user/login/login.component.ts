import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private router = inject(Router);
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Logging in with:', this.email, this.password);
    this.router.navigate(['/kanban']);
  }

}
