import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CharacterComponent } from './pages/characters/characters-all/character.component';



export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'personagens',
    component: CharacterComponent,
  },
];
