import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {
  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigateByUrl('services');
  }
}
