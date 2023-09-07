import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule],
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent {
  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigateByUrl('services');
  }
}
