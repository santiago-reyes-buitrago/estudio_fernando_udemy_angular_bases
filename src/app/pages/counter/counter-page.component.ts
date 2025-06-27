import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counterSignal = signal(10);
  counter = 10

  // constructor() {
  //   setInterval(()=>{
  //     // this.counter += 1;
  //     this.counterSignal.update((current) => current += 1)
  //     console.log('Tick')
  //   },2000)
  // }

  incrementCounter(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current += value)
  }

  decrementCounter(number: number) {
    if (this.counter > 0) this.counter -= number;
    if (this.counterSignal() > 0) this.counterSignal.update((current) => current-= number) ;
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
