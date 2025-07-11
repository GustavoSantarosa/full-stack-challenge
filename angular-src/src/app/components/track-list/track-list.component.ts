import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../services/track.service';
import { ArtistService } from '../../services/artist.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TrackModalComponent } from '../track-modal/track-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatPaginatorModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit {
  tracks: any[] = [];
  artistas: any[] = [];
  filtroArtista: string = '';
  busca: string = '';
  pagina = 1;
  total = 0;

  constructor(
    private trackService: TrackService,
    private artistService: ArtistService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.carregarArtistas();
    this.carregarFaixas();
  }

  carregarArtistas(): void {
    this.artistService.list().subscribe((res) => {
      this.artistas = res.data;
    });
  }

  carregarFaixas(): void {
    const params: any = {
      page: this.pagina,
      per_page: this.pageSize,
      includes: 'artists',
    };

    if (this.filtroArtista) {
      params['filter[artist_ids]'] = this.filtroArtista;
    }

    this.trackService.list(params).subscribe((res) => {
      this.tracks = res.data;
      this.total = res.pagination.total;
    });
  }

  resetarFiltros(): void {
    this.filtroArtista = '';
    this.busca = '';
    this.pagina = 1;
    this.carregarFaixas();
  }

  abrirModal(trackId: number): void {
    this.dialog.open(TrackModalComponent, {
      data: { id: trackId },
      width: '500px',
    });
  }

  filtrarPorArtista(): void {
    this.pagina = 1;
    this.carregarFaixas();
  }

  pageSize = 5;

  mudarPagina(event: PageEvent): void {
    this.pagina = event.pageIndex + 1;
    this.pageSize = event.pageSize;

    this.carregarFaixas();
  }
}
