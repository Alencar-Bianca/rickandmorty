import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CardEpisodesComponent } from '../../../shared/components/card-episodes/card-episodes.component';
import { EpisodeInterface } from '../../../interfaces/episodios.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardEpisodesComponent],
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.scss'
})
export class EpisodeComponent implements OnInit {
  ep: any;
  id: number = 1;

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id =  parseInt(this.route.snapshot.paramMap.get('id') || '1');
    this.getEp(this.id)
  }

  getEp(id: number){
    this.api.getEpisode(id).subscribe({
      next: (res) => {
        this.ep = res;
        console.log(this.ep)
      },
      error: (err) => {console.log(err)}
    })
  }
}
