import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CharacterComponent } from './pages/characters/characters-all/character.component';
import { CharComponent } from './pages/characters/char/char.component';



export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'personagens',
    component: CharacterComponent,
  },
  {
    path: 'personagem/:id',
    component: CharComponent
  }
];
