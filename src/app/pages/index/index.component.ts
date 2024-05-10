import { Component, signal  } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { linksInterface } from '../../interfaces/links.interface';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, RouterLink, CardComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  public  getLinks = signal <linksInterface[]>  ([
    {
      id: 1,
      link: 'personagens',
      image: '../../../assets/rick-and-morty1.png',
      title: 'Personagem'
    },
    {
      id: 2,
      link: 'personagens',
      image: '../../../assets/rick-and-morty2.png',
      title: 'Episódio'
    }
  ])


}
