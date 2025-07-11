import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

export class BaseApiService {
  protected defaultPage = 1;
  protected defaultPerPage = 10;

  protected toastr = inject(ToastrService);

  constructor(protected http: HttpClient, protected apiUrl: string) {}

  list(params?: any): Observable<any> {
    const mergedParams = {
      page: this.defaultPage,
      per_page: this.defaultPerPage,
      ...params,
    };
    return this.http.get(this.apiUrl, { params: mergedParams }).pipe(
      tap((res: any) => {
        this.showNotification(
          res.message || 'Requisição realizada!',
          res.httpCode || 200
        );
      }),
      catchError((err) => {
        this.showNotification('Erro na requisição!', err.status || 500);
        return of(err);
      })
    );
  }

  get(id: number, params?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { params }).pipe(
      tap((res: any) => {
        this.showNotification(
          res.message || 'Requisição realizada!',
          res.httpCode || 200
        );
      }),
      catchError((err) => {
        this.showNotification('Erro na requisição!', err.status || 500);
        return of(err);
      })
    );
  }

  showNotification(message: string, httpCode: number): void {
    let type: 'success' | 'info' | 'warning' | 'error' = 'success';
    if (httpCode >= 500) type = 'error';
    else if (httpCode >= 400) type = 'warning';
    else if (httpCode >= 300) type = 'info';
    else if (httpCode >= 200) type = 'success';

    if (type === 'success')
      this.toastr.success(message, '', { closeButton: true });
    else if (type === 'info')
      this.toastr.info(message, '', { closeButton: true });
    else if (type === 'warning')
      this.toastr.warning(message, '', { closeButton: true });
    else if (type === 'error')
      this.toastr.error(message, '', { closeButton: true });
  }
}
