import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FormComponent } from '../../shared/components/form/form.component';
import { loginInterface } from '../../interfaces/login.interface';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, FormComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  signUpObj: loginInterface = {name: '', email: '', password: ''}
  constructor(private router: Router){}

  onRegister(signUpObj: loginInterface) {
    const localUser = localStorage.getItem('rickandmorty');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(signUpObj);
      localStorage.setItem('rickandmorty', JSON.stringify(users));

    } else {
      const users = [signUpObj];
      localStorage.setItem('rickandmorty', JSON.stringify(users));
    }
    alert('Cadastro feito com sucesso!');
    this.router.navigateByUrl('/login');
  }

}
