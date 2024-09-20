import { Component } from '@angular/core';
import { LoginsrvService } from '../../services/loginsrv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup;
  msg: string = '';

  constructor(private fb: FormBuilder, private loginSrv: LoginsrvService, private router:Router) {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginSubmit() {
    if (this.myForm.valid) {
      const credentials = {
        username: this.myForm.get('username')?.value,
        password: this.myForm.get('password')?.value,
      };

      this.loginSrv.login(credentials).subscribe({
        next: (response: any) => {
          console.log("AAAAAAAAAAAAAAAAA");
          const token = response.access;
          console.log(token);
          localStorage.setItem('authToken', token);
          this.router.navigate(['/books']);
          console.log("Abbbbbbbbbbbbbb");
        },
        error: (err:string) => {
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


