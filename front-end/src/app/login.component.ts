import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(public router: Router) {}

  /**
   * Issue a request using HTTP Basic authentication. Spring Security's
   * `httpBasic()` setup expects credentials in the Authorization header
   * rather than form-encoded data. `btoa` is a browser API that encodes
   * the `username:password` pair to base64 as required by the spec.
   */
  login() {
    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${this.username}:${this.password}`));
    fetch('/characters', { headers })
      .then(res => {
        if (res.ok) {
          alert('Login successful');
        } else {
          alert('Invalid credentials');
        }
      });
  }
}
