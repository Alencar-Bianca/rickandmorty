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
  name: string = "";
  private page: number = 1;
  private info: { next: string} = { next: ''};

  constructor(private api: ApiService, @Inject(DOCUMENT) private document: Document){}

  ngOnInit() {
    this.onSearch(this.name);
  }

  filter(page: number, name: string | null): void {
  this.api.filterChar(page, name).subscribe({
    next: (res) => {
      const { info, results } = res;
      if (page === 1) {
        this.characters = [...results];
      } else {
        this.characters.push(...results);
      }
      this.info = info;
    },
    error: (err) => {
      console.log(err);
    }
  });
}


onSearch(value: string) {
  this.name = value;
  if (value && value.length > 2) {
    this.filter(this.page, value);
  } else {
    this.page = 1;
    this.filter(this.page, '');
  }
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
    this.filter(this.page, this.name);
  }

}
