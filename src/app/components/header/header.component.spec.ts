import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { MaterialModule } from 'src/app/shared/material.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [RouterTestingModule, MaterialModule, HeaderComponent],
    providers: [AuthService],
}).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should set estaLogado to true', () => {
    component.estaLogado = true;
    expect(component.estaLogado).toBeTrue();
  });

  it('should call authService.logout() when logout is called', () => {
    spyOn(authService, 'logout');

    component.logout();

    expect(authService.logout).toHaveBeenCalled();
  });
});
