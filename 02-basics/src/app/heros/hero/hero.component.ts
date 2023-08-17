import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public fullName: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getDescription(): string {
    return `${this.name} is ${this.fullName} with age ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.fullName = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 16;
  }
}
