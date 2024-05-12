import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
