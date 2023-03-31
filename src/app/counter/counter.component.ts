import { Component } from '@angular/core';
@Component({

    selector: 'app-counter',
    template: `<h3>Contador: {{counter}}</h3>
    <br>
    <button (click)="increase(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increase(-1)">-1</button>`
    

})
export class Conuntercomponent{

    counter = 0;

  increase(value :number) {
    this.counter += value;
  }

  reset(){
    this.counter = 0;
  }
}