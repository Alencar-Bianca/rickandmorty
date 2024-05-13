import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { loginInterface } from '../../../interfaces/login.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() text: string = '';
  @Input() submit: string = '';
  @Input() link: string = '';
  @Input() mens: string = '';

  signUp: loginInterface = {name: '', email: '', password: ''};


  @Output() register: EventEmitter<loginInterface> = new EventEmitter<loginInterface>();
  @Output() login: EventEmitter<loginInterface> = new EventEmitter<loginInterface>();

  onSubmit() {

    if (this.text == 'registrar') {
      this.register.emit(this.signUp);
    } else {
      this.login.emit(this.signUp);
    }
  }
}
