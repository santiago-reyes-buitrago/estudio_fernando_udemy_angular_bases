import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css'
})
export class HeroPage {
  name = signal('ironman');
  age = signal(45);

  heroDescription = computed(()=> `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() =>`${this.name().toUpperCase()}`)



  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(){
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);
  }

  getCapitalizeName(){
    return `${this.name().toUpperCase()}`;
  }
}
