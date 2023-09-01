import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavItemsComponent } from 'src/app/shared/nav-items/nav-items.component';

@Component({
  selector: 'app-siluets',
  standalone: true,
  imports: [NavItemsComponent, FooterComponent, RouterOutlet],
  templateUrl: './siluets.component.html',
  styleUrls: ['./siluets.component.scss'],
})
export class SiluetsComponent {}
