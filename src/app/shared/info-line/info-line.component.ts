import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-line',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './info-line.component.html',
  styleUrls: ['./info-line.component.scss']
})
export class InfoLineComponent {

}
