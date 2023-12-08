import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        JwtInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(JwtInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add the JWT token to the request headers', () => {
    const token = 'sample-token';
    localStorage.setItem('token', token);

    const url = 'https://api.example.com/data';
    const requestData = { name: 'John Doe' };

    httpClient.get(url).subscribe();

    const httpRequest = httpMock.expectOne((req: HttpRequest<any>) => {
      return req.headers.get('authorization') === `Bearer ${token}`;
    });

    expect(httpRequest.request.headers.has('authorization')).toBeTruthy();
    expect(httpRequest.request.headers.get('authorization')).toBe(`Bearer ${token}`);

    httpRequest.flush(requestData);
  });

  it('should not add the JWT token to the request headers if token is not available', () => {
    localStorage.removeItem('token');

    const url = 'https://api.example.com/data';

    httpClient.get(url).subscribe();

    const httpRequest = httpMock.expectOne((req: HttpRequest<any>) => {
      return !req.headers.has('authorization');
    });

    expect(httpRequest.request.headers.has('authorization')).toBeFalsy();

    httpRequest.flush({});
  });
});
