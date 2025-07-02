import {effect, Injectable, signal} from '@angular/core';
import type {Character} from '../interface/character.interface';

const loadFromLocalStorage = ():Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters): []
}

@Injectable({providedIn: 'root'})
export class DragonballSuperService {
  characters = signal<Character[]>(loadFromLocalStorage());


  saveToLocalStorage =  effect(()=>{
    // console.log(`Character count: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(event:Character) {
    this.characters.update((list) => [...list, event]);
  }
}
