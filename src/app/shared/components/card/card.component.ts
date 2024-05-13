import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() link: string = "";
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() status: string = "";
  @Input() statusColor:  string = "Alive";
  @Input() gender: string = "";
  @Input() location: string = "";
  @Input() epP: string = "";
  @Input() epU: string = "";


}
