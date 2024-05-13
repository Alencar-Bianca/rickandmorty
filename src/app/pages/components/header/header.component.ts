import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user:any ;
  text: string = '';
  constructor(private router: Router) {
    const localUser = localStorage.getItem('isLogin');
    if(localUser != null) {
      this.user = JSON.parse(localUser);
      this.text = 'Sair';
    }
    else {
      this.text = 'Entrar';
    }
  }

  onLogoff() {
    localStorage.removeItem('isLogin');
    this.router.navigateByUrl('/login')
  }
}
