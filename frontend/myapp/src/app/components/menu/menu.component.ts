import { Component } from '@angular/core';
import { SrvAuthService } from '../../services/srv-auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isSuperUser: boolean = false;
  constructor(public authService: SrvAuthService) {
  this.isSuperUser = this.authService.isSuperuser(); 
  }

  
}


