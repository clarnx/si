import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavItemsComponent } from 'src/app/shared/nav-items/nav-items.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, NavItemsComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

}
