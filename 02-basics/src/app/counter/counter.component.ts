import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
export class CounterComponent {
  private DEFAULT_VALUE = 10;

  public counter: number = this.DEFAULT_VALUE;

  resetCounter():void {
    this.counter = this.DEFAULT_VALUE;
  }

  increaseCounter(): void {
    this.addCounter(1);
  }

  decreaseCounter(): void {
    this.addCounter(-1);
  }

  private addCounter(value: number): void {
    this.counter += value;
  }
}
