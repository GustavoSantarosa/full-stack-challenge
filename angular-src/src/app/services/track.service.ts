import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// track.service.ts
@Injectable({ providedIn: 'root' })
export class TrackService {
  private apiUrl = 'http://localhost:8000/tracks/v1';

  constructor(private http: HttpClient) {}

  listTracks(params: any, includes?: string[]): Observable<any> {
    const queryParams = { ...params };
    if (includes && includes.length) {
      queryParams['includes'] = includes.join(',');
    }
    return this.http.get(`${this.apiUrl}`, { params: queryParams });
  }

  getTrack(id: number, includes?: string[]): Observable<any> {
    const queryParams: any = {};
    if (includes && includes.length) {
      queryParams['includes'] = includes.join(',');
    }
    return this.http.get(`${this.apiUrl}/${id}`, { params: queryParams });
  }

  searchByISRC(isrc: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/search/${isrc}`, {});
  }
}
