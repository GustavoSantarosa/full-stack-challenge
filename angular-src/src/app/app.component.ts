import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSelectModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet,
    RouterModule,
    NzSelectModule,
    NzDropDownModule,
    NzIconModule,
    NzButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Desafio OneRpm - Angular';

  idiomaSelecionado = 'pt-br';
  linguas = [
    { value: 'en', label: 'English', flag: 'assets/flags/us.svg' },
    { value: 'pt-br', label: 'Português', flag: 'assets/flags/br.svg' },
    { value: 'ru', label: 'Русский', flag: 'assets/flags/ru.svg' },
    { value: 'zh', label: '中文', flag: 'assets/flags/cn.svg' },
    { value: 'es', label: 'Español', flag: 'assets/flags/es.svg' },
  ];

  constructor(private cookieService: CookieService) {
    const lang = this.cookieService.get('lang');
    if (lang) {
      this.idiomaSelecionado = lang;
    }
  }

  onIdiomaChange(lang: string) {
    this.cookieService.set('lang', lang);
    this.idiomaSelecionado = lang;
  }

  get bandeiraSelecionada(): string {
    const lang = this.linguas.find((l) => l.value === this.idiomaSelecionado);
    return lang ? lang.flag : '';
  }
}
