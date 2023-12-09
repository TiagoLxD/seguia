import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularSplitModule } from 'angular-split';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialModule } from 'src/app/shared/material.module';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorComponent],
      imports: [HttpClientTestingModule, AngularSplitModule, MaterialModule]

    });
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
