import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CharacterComponent } from './pages/characters/characters-all/character.component';
import { CharComponent } from './pages/characters/char/char.component';
import { EpisodesListComponent } from './pages/episodes/episodes-list/episodes-list.component';
import { EpisodeComponent } from './pages/episodes/episode/episode.component';
import { LoginComponent } from './pages/login/login.component';



export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'personagens',
    component: CharacterComponent,
  },
  {
    path: 'personagem/:id',
    component: CharComponent
  },
  {
    path: 'episodios',
    component: EpisodesListComponent,
  },
  {
    path: 'episodio/:id',
    component: EpisodeComponent,
  },
];
