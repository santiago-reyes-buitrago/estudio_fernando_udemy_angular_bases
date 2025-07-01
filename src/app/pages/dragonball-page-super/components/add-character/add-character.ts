import {Component, output, signal} from '@angular/core';
import type {Character} from '../../../../interface/character.interface';

@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.html',
  styleUrl: './add-character.css'
})
export class AddCharacter {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id:Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }

    // // this.characters().push(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);

    console.log(this.name(),this.power());
    this.newCharacter.emit(newCharacter);
    this.resetForm();
  }


  resetForm():void{
    this.name.set('');
    this.power.set(0);
  }
}
