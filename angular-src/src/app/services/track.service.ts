import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrackService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, 'http://127.0.0.1:8000/tracks/v1');
  }

  searchByISRC(isrc: string): Observable<any> {
    return this.post(`search/${isrc}`, {}).pipe(
      tap((res: any) => {
        this.showNotification(
          res.message || 'Busca realizada!',
          res.httpCode || 201
        );
      }),
      catchError((err) => {
        const apiMessage =
          err?.error?.message ||
          err?.error?.Message ||
          err?.message ||
          'Erro na requisição!';
        this.showNotification(apiMessage, err.status || 500);
        return of(err);
      })
    );
  }
}
