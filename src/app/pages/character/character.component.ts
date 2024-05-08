import { Component } from '@angular/core';
import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

}
