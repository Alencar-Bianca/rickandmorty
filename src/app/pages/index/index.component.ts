import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, MenuComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
