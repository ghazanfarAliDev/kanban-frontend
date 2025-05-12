import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  private apiUrl = '';

  login(email: string, password: string) {
    console.log('Login Data:', { email, password });
    return this.http.post(this.apiUrl+'/login', {email, password});
  }

  register(email: string, password: string){
    console.log('Register Data:', { email, password });
    return this.http.post(this.apiUrl+'/register', {email, password});
  }
}
