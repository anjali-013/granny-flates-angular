import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login-success-dialog',
  standalone: false,
  
  templateUrl: './login-success-dialog.component.html',
  styleUrl: './login-success-dialog.component.css'
})
export class LoginSuccessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoginSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
