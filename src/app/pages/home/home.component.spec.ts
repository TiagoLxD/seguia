import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a catalogo array', () => {
    expect(component.catalogo).toBeDefined();
    expect(Array.isArray(component.catalogo)).toBe(true);
  });

  it('should have three items in the catalogo array', () => {
    expect(component.catalogo.length).toBe(3);
  });

  it('should have the correct properties in each item of the catalogo array', () => {
    component.catalogo.forEach(item => {
      expect(item.id).toBeDefined();
      expect(item.nome).toBeDefined();
      expect(item.linguagens).toBeDefined();
      expect(Array.isArray(item.linguagens)).toBe(true);
    });
  });
});
