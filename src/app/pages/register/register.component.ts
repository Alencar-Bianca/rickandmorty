import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
