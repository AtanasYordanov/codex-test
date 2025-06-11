import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  constructor(public router: Router) {}
}
