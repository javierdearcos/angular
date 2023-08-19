import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable()
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 9999,
    },
    {
      name: 'Trunks',
      power: 8000,
    },
  ];

  getCharacters(): Character[] {
    return [...this.characters];
  }

  addCharacter(character: Character): void {
    this.characters.push(character);
  }

  deleteCharacterWithIndex(characterIndex: number): void {
    this.characters.splice(characterIndex, 1);
  }
}
