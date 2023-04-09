import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse, HttpHeaders, HttpContextToken } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const BYPASS_AUT_TOKEN = new HttpContextToken(() => false);
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request.clone({
            url: window.config.apiUrl + request.url
        })).pipe(
                catchError((error: HttpErrorResponse) => {
                    alert(error.error.messages);
                    return throwError(() => new Error(error.error.messages));
                })
            );
    }
}

