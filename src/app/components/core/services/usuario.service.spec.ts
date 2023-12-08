import { TestBed } from '@angular/core/testing';

import { LoginRequest, UsuarioService } from './usuario.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let httpMock: HttpTestingController;
  let apiURL = 'http://localhost:5000/api'
  let url = apiURL + '/recover-password'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsuarioService]
    });
    service = TestBed.inject(UsuarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send a login request', () => {
    const mockLoginRequest: LoginRequest = { email: 'testuser', senha: 'testpassword' };
    const mockTokenResponse = { token: 'mocktoken' };

    service.login(mockLoginRequest).subscribe(response => {
      expect(response).toEqual(mockTokenResponse);
    });

    const req = httpMock.expectOne(apiURL + "/login");
    expect(req.request.method).toBe('POST');
    req.flush(mockTokenResponse);
  });

  it('should send a recovery password request', () => {
    const mockEmail = 'test@example.com';

    service.recoveryPassword(mockEmail).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email: mockEmail });
    req.flush({});
  });

});
