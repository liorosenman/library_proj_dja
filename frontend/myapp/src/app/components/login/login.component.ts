import { Component } from '@angular/core';
import { LoginsrvService } from '../../services/loginsrv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup;
  userInput: string = '';
  passInput: string = '';
  msg: string = '';

  constructor(private fb: FormBuilder, private loginsrvService: LoginsrvService) {
    this.myForm = this.fb.group({
      userInput: ['', Validators.required],
      passInput: ['', Validators.required]
    });
  }

  loginSubmit() {
    if (this.myForm.valid) {
      const credentials = this.myForm.value;
      this.loginsrvService.login(credentials).subscribe({
        next: (msg) => {
          this.msg = 'Login successful!';
        },
        error: (err) => {
          this.msg = 'Login failed. Please try again.';
          console.error(err);
        }
      });
    } else {
      this.msg = 'Please fill in all required fields.';
    }
  }
}
  

     
  // loginSubmit() {
  //   const loginData = { username: this.userInput, password: this.passInput };  
  //   this.loginSer.login(loginData).subscribe({
  //     next: (msg) => console.log(msg),
  //     error: (error) => console.error('Error during login:', error),
  //     complete: () => console.log('Login request completed.')
  //   });
  // }


