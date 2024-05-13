import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  user:any ;
  isLogin: boolean = false;
  constructor() {
    const localUser = localStorage.getItem('isLogin');
    if(localUser != null) {
      this.user = JSON.parse(localUser);
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
  }
}
