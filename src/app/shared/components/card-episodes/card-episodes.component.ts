import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-episodes',
  standalone: true,
  imports: [],
  templateUrl: './card-episodes.component.html',
  styleUrl: './card-episodes.component.scss'
})
export class CardEpisodesComponent {
  @Input() link: string = '';
  @Input() name: string = '';
  @Input() airDate: string = '';
  @Input() episode: string = '';
}
