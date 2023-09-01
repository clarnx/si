import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {}
