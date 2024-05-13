import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FormComponent } from '../../shared/components/form/form.component';
import { loginInterface } from '../../interfaces/login.interface';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: loginInterface = {email: '', password: ''} ;
  constructor(private router: Router){}

  onLogin(login: loginInterface) {
    const localUsers = localStorage.getItem('rickandmorty');

    if (localUsers != null) {
      const users: loginInterface[] = JSON.parse(localUsers);
      const isUserPresent = users.find(
        (user: loginInterface) =>
          user.email === login.email && user.password === login.password
      );

      if (isUserPresent !== undefined) {
        alert('Logado com sucesso');
        localStorage.setItem('isLogin', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/');
      } else {
        alert('Usuário não encontrado');
      }
    }
  }
}
