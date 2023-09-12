import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('lv-LV');
  }
}
