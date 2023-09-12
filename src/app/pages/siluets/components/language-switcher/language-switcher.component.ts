import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/shared/interfaces/languages.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit {
  selectedLanguage!: string | null;
  readonly languages: Language[] = [
    { label: 'LV', value: 'lv-LV' },
    { label: 'RU', value: 'ru-RU' },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.checkSessionStorage();
  }

  selectLanguage(languageCode: string) {
    sessionStorage.setItem('lang', languageCode);
    this.translateService.use(languageCode);
  }

  private checkSessionStorage() {
    if (sessionStorage.getItem('lang')) {
      const selected = sessionStorage.getItem('lang');
      this.selectedLanguage = selected;
    } else {
      this.selectedLanguage = this.translateService.defaultLang;
    }
  }
}
