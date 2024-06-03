import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  @Input() statusColor:  string = "Alive";
  user:any ;

  constructor() {
    const localUser = localStorage.getItem('isLogin');
    if(localUser != null) {
      this.user = JSON.parse(localUser);
    }
    else {
      alert('Usuário não encontrado')
    }
  }
}
