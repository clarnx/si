import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavItemsComponent } from './components/nav-items/nav-items.component';

@Component({
  selector: 'app-siluets',
  standalone: true,
  imports: [NavItemsComponent, FooterComponent, RouterOutlet],
  templateUrl: './siluets.component.html',
  styleUrls: ['./siluets.component.scss'],
})
export class SiluetsComponent {}
