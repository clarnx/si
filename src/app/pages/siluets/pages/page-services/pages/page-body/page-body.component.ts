import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-body',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent {

}
