import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CardEpisodesComponent } from '../../../shared/components/card-episodes/card-episodes.component';

import { EpisodeInterface } from '../../../interfaces/episodios.interface';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-episodes-list',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardEpisodesComponent],
  templateUrl: './episodes-list.component.html',
  styleUrl: './episodes-list.component.scss'
})
export class EpisodesListComponent implements OnInit {
  episodeos: EpisodeInterface[] = [];
  private info: { next: string} = { next: ''};
  private page: number = 1;
  constructor(private api: ApiService, @Inject(DOCUMENT) private document: Document ){}

  ngOnInit() {
    this.getEpisodeos(this.page)
  }

  getEpisodeos(page: number){
    this.api.getEpisodes(page).subscribe({
      next: (res) => {
        const { info, results } = res;
        this.episodeos = [...this.episodeos, ...results];
        this.info = info;
        console.log(this.episodeos )
      }

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
    this.getEpisodeos(this.page);
  }

}