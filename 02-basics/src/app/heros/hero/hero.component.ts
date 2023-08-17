import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {

  public name: string = HeroComponentConstants.DEFAULT_NAME;
  public fullName: string = HeroComponentConstants.DEFAULT_FULL_NAME;
  public age: number = HeroComponentConstants.DEFAULT_AGE;

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

  resetForm(): void {
    this.name = HeroComponentConstants.DEFAULT_NAME;
    this.fullName = HeroComponentConstants.DEFAULT_FULL_NAME;
    this.age = HeroComponentConstants.DEFAULT_AGE;
  }

  public HeroComponentConstants = HeroComponentConstants;
}

class HeroComponentConstants {
  public static readonly DEFAULT_NAME: string = 'Iron Man';
  public static readonly DEFAULT_FULL_NAME: string = 'Tony Stark';
  public static readonly DEFAULT_AGE: number = 45;
}
