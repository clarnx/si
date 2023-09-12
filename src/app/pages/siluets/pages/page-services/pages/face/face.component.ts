import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-face',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss']
})
export class FaceComponent {

}
