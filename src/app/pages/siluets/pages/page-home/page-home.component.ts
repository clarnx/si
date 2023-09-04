import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, NgOptimizedImage, MatDividerModule],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {
  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigateByUrl('services');
  }
}
