import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrl: './dialog-success.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DialogSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mensagem: string }
  ) { }

  fecharDialog(): void {
    this.dialogRef.close();
  }
}
