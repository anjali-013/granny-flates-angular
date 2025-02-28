import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-sucess-dialog',
  standalone: false,
  
  templateUrl: './registration-sucess-dialog.component.html',
  styleUrl: './registration-sucess-dialog.component.css'
})
export class RegistrationSucessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RegistrationSucessDialogComponent >,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
