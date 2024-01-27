import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { UsuarioService } from '../core/services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let usuarioService: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientModule, LoginComponent],
    providers: [UsuarioService]
});
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm with formFields', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('email')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('should call usuarioService.login and set token in localStorage on login', () => {
    const loginValues = { email: '', senha: '' };
    const token: TokenReponse = { token: 'test-token' };
    spyOn(usuarioService, 'login').and.returnValue(of(token));

    component.login();

    expect(localStorage.getItem('token')).toBe(token.token);
  });
});


interface TokenReponse {
  token: string;
}
