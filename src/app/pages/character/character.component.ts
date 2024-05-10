import { Component } from '@angular/core';

import { MenuComponent } from '../components/menu/menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { ApiService } from '../../services/api.service';
import { charactersInterface } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

  characters: charactersInterface[] = [];
  info: [] = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.api.getCharacters().subscribe({
      next: (result) => {
      const { info, results } = result;
        this.characters = [...this.characters, ...results];
        this.info = result.info;
        console.log(this.info)
      },
      error: (err) => {console.log(err)}
    })
  }
}
