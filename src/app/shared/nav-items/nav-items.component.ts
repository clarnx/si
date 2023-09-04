import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { InfoLineComponent } from '../info-line/info-line.component';
import { NgOptimizedImage } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, InfoLineComponent, NgOptimizedImage, LanguageSwitcherComponent],
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {}
