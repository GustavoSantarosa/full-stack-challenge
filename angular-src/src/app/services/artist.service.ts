import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiService } from './base-api.service';

@Injectable({ providedIn: 'root' })
export class ArtistService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, 'http://127.0.0.1:8000/artists/v1');
  }
}
