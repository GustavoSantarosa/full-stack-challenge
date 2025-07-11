import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrackService } from '../../services/track.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-track-modal',
  standalone: true,
  templateUrl: './track-modal.component.html',
  styleUrls: ['./track-modal.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, NgIf],
})
export class TrackModalComponent {
  track: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private service: TrackService
  ) {
    this.service
      .get(data.id, ['artists'])
      .subscribe((res) => (this.track = res.data));
  }

  get artistasNomes(): string {
    return this.track?.artists?.map((a: any) => a.name).join(', ') ?? '';
  }
}
