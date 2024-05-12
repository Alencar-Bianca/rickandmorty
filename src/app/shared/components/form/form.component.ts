import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() text: string = '';
  @Input() submit: string = '';
  @Input() link: string = '';
  @Input() mens: string = '';
}
