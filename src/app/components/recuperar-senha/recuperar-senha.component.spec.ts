
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RecuperarSenhaComponent } from './recuperar-senha.component';
import { of } from 'rxjs';
import { UsuarioService } from '../core/services/usuario.service';

describe('RecuperarSenhaComponent', () => {
  let component: RecuperarSenhaComponent;
  let fixture: ComponentFixture<RecuperarSenhaComponent>;
  let usuarioService: UsuarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarSenhaComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UsuarioService]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarSenhaComponent);
    component = fixture.componentInstance;
    usuarioService = TestBed.inject(UsuarioService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize emailForm with an empty email field', () => {
    expect(component.emailForm.get('email')?.value).toEqual('');
  });

  it('should call usuarioService.recoveryPassword method when submitForm is called', () => {
    const email = 'test@example.com';
    spyOn(usuarioService, 'recoveryPassword').and.returnValue(of({}));
    component.emailForm.patchValue({ email });
    component.submitForm();
    expect(usuarioService.recoveryPassword).toHaveBeenCalledWith(email);
  });



});
