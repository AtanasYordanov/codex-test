import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [FormsModule]
})
export class RegisterComponent {
  username = '';
  password = '';
  repeat = '';

  register() {
    if (this.password !== this.repeat) {
      alert('Passwords do not match');
      return;
    }
    fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.username, password: this.password })
    }).then(res => {
      if (res.ok) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    });
  }
}
