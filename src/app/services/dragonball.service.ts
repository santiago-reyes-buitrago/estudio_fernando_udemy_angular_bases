import {effect, Injectable, signal} from '@angular/core';
import type {Character} from '../interface/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballSuperService {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  saveToLocalStorage =  effect(()=>{
    // console.log(`Character count: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(event:Character) {
    this.characters.update((list) => [...list, event]);
  }
}
