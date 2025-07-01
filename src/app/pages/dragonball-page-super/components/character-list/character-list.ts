import {Component, input} from '@angular/core';
import type {Character} from '../../../../interface/character.interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {
  listName = input.required<string>();
  characters = input.required<Character[]>();

}
