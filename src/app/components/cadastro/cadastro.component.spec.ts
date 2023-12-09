import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent } from './cadastro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle password visibility', () => {
    component.showPassword = false;
    component.togglePasswordVisibility();
    expect(component.showPassword).toBe(true);
    component.togglePasswordVisibility();
    expect(component.showPassword).toBe(false);
  });

  it('should not set cadastroSucesso to true when cadastroForm is invalid', () => {
    component.cadastroForm.setValue({
      completeName: 'Teste',
      email: 'Teste@example.com',
      password: 'password123',
    });
    component.cadastrar();
    expect(component.cadastroSucesso).toBe(false);
  });

  it('should type the text', () => {
    component.typedText = 'Hello, World!';
    component.typeText();
    expect(component.typedText).toBe('Hello, World!');
  });

  afterEach(() => {
    fixture.destroy();
  });
});
