import { Routes } from '@angular/router';
import {CounterPageComponent} from './pages/counter/counter-page.component';
import {HeroPage} from './pages/hero/hero-page/hero-page';
import {DragonballPage} from './pages/dragonball-page/dragonball-page';

export const routes: Routes = [
  {path: '',component: CounterPageComponent},
  {path: 'hero',component: HeroPage},
  {path: 'dragonball', component: DragonballPage},
  {path: '**', redirectTo: ''}
];
