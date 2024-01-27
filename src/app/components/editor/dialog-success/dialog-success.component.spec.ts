import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSuccessComponent } from './dialog-success.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this import

describe('DialogSuccessComponent', () => {
  let component: DialogSuccessComponent;
  let fixture: ComponentFixture<DialogSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MatDialogModule, BrowserAnimationsModule, DialogSuccessComponent],
    providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { mensagem: 'Test Message' } }
    ]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
