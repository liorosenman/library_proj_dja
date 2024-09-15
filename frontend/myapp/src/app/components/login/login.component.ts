import { Component } from '@angular/core';
import { LoginsrvService } from '../../services/loginsrv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userInput: string = ''
  passInput: string = ''
  

loginSubmit(){
    constructor(private ls : LoginsrvService)
  }

}
