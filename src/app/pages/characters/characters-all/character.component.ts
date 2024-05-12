import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../../shared/components/card/card.component';

import { ApiService } from '../../../services/api.service';

import { charactersInterface } from '../../../interfaces/characters.interface';
import { SearchComponent } from '../../../shared/components/search/search.component';


@Component({
  selector: 'app-character',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardComponent, SearchComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {

  characters: charactersInterface[] = [];
  private page: number = 1;
  private info: { next: string} = { next: ''};

  constructor(private api: ApiService, @Inject(DOCUMENT) private document: Document){}

  ngOnInit() {
    this.getCharacters(this.page);
  }

  getCharacters(page: number) {
    this.api.getCharacters(page).subscribe({
      next: (res) => {
        const { info, results } = res;
            this.characters = [...this.characters, ...results];
            this.info = info;
      },
      error: (err) => {console.log(err)}
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffset = window.scrollY;
    const windowHeight = this.document.documentElement.clientHeight || window.innerHeight;
    const bodyHeight = this.document.documentElement.scrollHeight || document.body.scrollHeight;

    if (this.info.next && yOffset + windowHeight >= bodyHeight) {
      this.nextPage();
    }

  }

  nextPage(): void {
    this.page++;
    this.getCharacters(this.page);
  }

}
