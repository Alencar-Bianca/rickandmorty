import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-index',
  standalone: true,
  imports: [],
  templateUrl: './card-index.component.html',
  styleUrl: './card-index.component.scss'
})
export class CardIndexComponent {
  @Input() link:string = ''
  @Input() image:string = ''
  @Input() title:string = ''
}
