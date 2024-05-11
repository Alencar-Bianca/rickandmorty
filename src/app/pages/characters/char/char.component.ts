import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardComponent } from '../../../shared/components/card/card.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { HeaderComponent } from '../../components/header/header.component';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-char',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, CardComponent],
  templateUrl: './char.component.html',
  styleUrl: './char.component.scss'
})
export class CharComponent implements OnInit  {
  char: any;
  id: number = 1;

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '1');

    this.getChar(this.id);
  }

  getChar(id: number){
    this.api.getChar(id).subscribe({
      next: (res) => {
        this.char = res;
      },
      error: (err) => {console.log(err)}
    });
  }
}
