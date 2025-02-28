import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-failed-dialog',
  standalone: false,
  
  templateUrl: './login-failed-dialog.component.html',
  styleUrl: './login-failed-dialog.component.css'
})
export class LoginFailedDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginFailedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {  }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }


}
