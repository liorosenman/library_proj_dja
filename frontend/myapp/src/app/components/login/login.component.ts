import { Component } from '@angular/core';
import { LoginsrvService } from '../../services/loginsrv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userInput: string = '';
  passInput: string = '';
  msg: string = '';
  constructor(private loginSer: LoginsrvService) {}
     
  loginSubmit() {
    const loginData = { username: this.userInput, password: this.passInput };  
    this.loginSer.login(loginData).subscribe({
      next: (msg) => console.log(msg),
      error: (error) => console.error('Error during login:', error),
      complete: () => console.log('Login request completed.')
    });
  }

}
