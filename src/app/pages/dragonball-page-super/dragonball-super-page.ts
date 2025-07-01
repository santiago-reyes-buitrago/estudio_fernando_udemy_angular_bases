import {Component, inject} from '@angular/core';
import {CharacterList} from './components/character-list/character-list';
import type {Character} from '../../interface/character.interface';
import {AddCharacter} from './components/add-character/add-character';
import {DragonballSuperService} from '../../services/dragonball.service';



@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterList,
    AddCharacter
  ],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css'
})
export class DragonballSuperPage {
  public dragonBallService = inject(DragonballSuperService);
  // constructor(
  //   public dragonBallService: DragonballSuperService
  // ) {}


}
