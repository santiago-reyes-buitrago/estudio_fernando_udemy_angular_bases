import {Component, computed, signal} from '@angular/core';

interface Character {
  id:number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css'
})
export class DragonballPage {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
  ]);

  // powerClasses = computed(() => {
  //   return{'text-danger':true}
  // })
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      id:this.characters().length +1,
      name: this.name(),
      power: this.power(),
    }

    // this.characters().push(newCharacter);
    this.characters.update((list) => [...list, newCharacter]);

    console.log(this.name(),this.power());
  }


  resetForm():void{
    this.name.set('');
    this.power.set(0);
  }
}
