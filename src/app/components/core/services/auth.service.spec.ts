import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, Router]
    });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return true if user is logged in', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dummyToken');
    spyOn(service, 'decodeToken');
    const result = service.isLoggedIn();
    expect(result).toBeTrue();
    expect(service.decodeToken).toHaveBeenCalled();
  });

  it('should remove token and navigate to home on logout', () => {
    spyOn(localStorage, 'removeItem');
    spyOn(router, 'navigate');
    service.logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

  it('should return the decoded client from the token', () => {
    service['decodedToken'] = { cliente: 'dummyClient' };
    const result = service.getCliente;
    expect(result).toBe('dummyClient');
  });

  it('should return true for isUserAdmin', () => {
    const result = service.isUserAdmin();
    expect(result).toBeTrue();
  });

  it('should return the token from local storage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('dummyToken');
    const result = service.getToken();
    expect(result).toBe('dummyToken');
  });
});
