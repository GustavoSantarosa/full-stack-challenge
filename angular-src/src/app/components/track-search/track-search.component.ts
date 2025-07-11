import { Component } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-track-search',
  standalone: true,
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
  ],
})
export class TrackSearchComponent {
  isrc = '';
  track: any = null;
  buscou = false;
  carregando = false;

  constructor(private trackService: TrackService) {}

  buscar(): void {
    if (!this.isrc.trim()) return;

    this.buscou = true;
    this.carregando = true;

    this.trackService.searchByISRC(this.isrc).subscribe(
      (res) => {
        this.track = res;
        this.carregando = false;
      },
      (err) => {
        this.track = null;
        this.carregando = false;
      }
    );
  }
}
