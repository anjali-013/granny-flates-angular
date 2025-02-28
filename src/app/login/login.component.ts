import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginSuccessDialogComponent } from '../login-success-dialog/login-success-dialog.component';
import { RegistrationSucessDialogComponent } from '../registration-sucess-dialog/registration-sucess-dialog.component';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<LoginComponent>) { }
  posts: any[] = [];
  isRegistrationOpen = false;
  registrationForm: NgForm | undefined;
  loginFormData = {
    email: '',
    password: '',
  };
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  toggleConfirmPasswordVisibility(): void {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  registerFormData = {
    fullName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  errorMessages = {
    fullName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: ''
  };

  clearError(field: keyof typeof this.errorMessages): void {
    this.errorMessages[field] = ''; // Clears the error message when user starts typing
  }

  

  passwordMatch = true;
  loginResponse: any = null;
  errorMessage: string | null = null;
  errorMessage1: string | null = null;

  onEmailChangeLogin(event: string): void {
    this.loginFormData.email = event;
    this.errorMessage = null; // Clear the error message on email change
  }

  onPasswordChangeLogin(event: string): void {
    this.loginFormData.password = event;
    this.errorMessage = null; // Clear the error message on password change
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

  toggleRegistration() {
    this.isRegistrationOpen = !this.isRegistrationOpen;
  }
  

  // Submit the login form and make the API call
  async onSubmit(): Promise<void> {
    const validEmail = 'dev7.cts@yopmail.com';
    const validPassword = '123';

    // Clear any previous error messages
    this.errorMessage = null;

    // Check if email and password fields are filled
    if (!this.loginFormData.email || !this.loginFormData.password) {
      return; // Don't proceed with further checks if either is missing
    }

    // Check if the email and password match the hardcoded values
    const emailIsValid = this.loginFormData.email === validEmail;
    const passwordIsValid = this.loginFormData.password === validPassword;

    // If both email and password are invalid, show "Invalid email and password"
    if (!emailIsValid && !passwordIsValid) {
      this.errorMessage = 'Invalid email or password';
      return; // Stop further processing if both are invalid
    }
    // If email is invalid, show "Invalid email" error
    if (!emailIsValid) {
      this.errorMessage = 'Invalid email or password';
      return; // Stop further processing if only the email is invalid
    }


    
    // If password is invalid, show "Invalid password" error
    if (!passwordIsValid) {
      this.errorMessage = 'Invalid email or password';
      return; // Stop further processing if only the password is invalid
    }

    // Now proceed with the API request if validation passes
    try {
      const url = 'https://api.socceryou.ch/api/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.loginFormData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Login successful:', responseData);

        if (responseData.status === true) {
          this.dialog.open(LoginSuccessDialogComponent, {});
        } else {
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      } else {
        this.errorMessage = 'An error occurred during login. Please try again.';
        console.error('Login failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  // Input event handlers
  onFullNameChange(event: string): void {
    this.registerFormData.fullName = event;
  }

  onGenderChange(selectedGender: string): void {
    this.registerFormData.gender = selectedGender;
  }

  onEmailChange(event: string): void {
    this.registerFormData.email = event;
  }

  // Password Match Checking and Form Validation
  onPasswordChange(event: string): void {
    this.registerFormData.password = event;
    this.updatePasswordMatch();
  }

  disableCopyPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  onConfirmPasswordChange(confirmPassword: string): void {
    this.registerFormData.confirmPassword = confirmPassword;
    this.updatePasswordMatch();
  }

  // Function to check if passwords match
  private updatePasswordMatch(): void {
    this.passwordMatch = this.registerFormData.password === this.registerFormData.confirmPassword;
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // Registration Handler
  onRegisterBtn(): void {
    // Clear previous error messages
    this.errorMessages = {
      fullName: '',
      gender: '',
      email: '',
      password: '',
      confirmPassword: '',
      general: ''
    };

    let isValid = true;

    // Check if all fields are filled and show error if any field is empty
    if (!this.registerFormData.fullName) {
      this.errorMessages.fullName = 'Full Name is required.';
      isValid = false;
    }

    if (!this.registerFormData.gender) {
      this.errorMessages.gender = 'Gender is required.';
      isValid = false;
    }

    if (!this.registerFormData.email) {
      this.errorMessages.email = 'Email is required.';
      isValid = false;
    } else if (!this.validateEmail(this.registerFormData.email)) {
      this.errorMessages.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!this.registerFormData.password) {
      this.errorMessages.password = 'Password is required.';
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(this.registerFormData.password)) {
      this.errorMessages.password = 'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character.';
      isValid = false;
    }

    if (!this.registerFormData.confirmPassword) {
      this.errorMessages.confirmPassword = 'Confirm Password is required.';
      isValid = false;
    }

    // Ensure passwords match
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.errorMessages.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    // If all fields are valid, proceed with the registration API call
    if (isValid) {
      const registrationData = {
        fullName: this.registerFormData.fullName,
        gender: this.registerFormData.gender,
        email: this.registerFormData.email,
        password: this.registerFormData.password,
        confirmPassword: this.registerFormData.confirmPassword
      };


      // Make the API request to submit registration data
      this.submitRegistration(registrationData);
    } 
    // else {
    //   this.errorMessages.general = 'Please fill all fields';
    // }



  }

  // Function to handle API call to submit registration data
  private async submitRegistration(registrationData: any): Promise<void> {
    let testing = registrationData ? true : false;
   
    try {
      const url = 'https://kanzlei-schuessler.de/wp-json/myplugin/v1/send-data';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testing }),
      }); 
  
      const responseBody = await response.json();
      console.log(responseBody);
  
      // If testing is true and registration is successful, show success dialog
      if (testing && response.ok) {
        this.dialog.open(RegistrationSucessDialogComponent, {
          data: { message: 'Registration Successful!' },
        });
  
        // Clear form fields after successful registration
        this.registerFormData = {
          fullName: '',
          gender: '',
          email: '',
          password: '',
          confirmPassword: '',
        };
  
        this.isRegistrationOpen = false; // Close registration form
      } else {
        this.errorMessages.general =
          responseBody?.message || 'An error occurred during registration. Please try again.';
      }
    } catch (error) {
     
      console.error('Error during registration:', error);
    }
  }
  
  

}
