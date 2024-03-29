import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';

@Injectable()
export class CryptoLoadingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error : HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `There is a problem with the server. Please try again later.`;
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
