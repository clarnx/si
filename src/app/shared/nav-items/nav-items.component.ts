import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { InfoLineComponent } from '../info-line/info-line.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    InfoLineComponent,
    LanguageSwitcherComponent,
    MatMenuModule,
    MatButtonModule,
  ],
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.scss'],
})
export class NavItemsComponent {}
