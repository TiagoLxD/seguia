import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interceptor to add JWT token to outgoing HTTP requests.
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  /**
   * Intercepts the HTTP request and adds the JWT token to the request headers.
   * @param req - The HTTP request.
   * @param next - The next HTTP handler.
   * @returns An observable of the HTTP event.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (token) {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(req);
  }
}
