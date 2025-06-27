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
    {id: 2, name: 'Vegeta', power: 8000},
    {id: 4, name: 'Yamcha', power: 500},
    {id: 3, name: 'Piccolo', power: 3000},
  ]);

  // powerClasses = computed(() => {
  //   return{'text-danger':true}
  // })
  addCharacter() {
    console.log(this.name(),this.power());
  }

  protected readonly Number = Number;
}
