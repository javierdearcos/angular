import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

console.log(uuid());

@Injectable()
export class DbzService {
  public characters: Character[] = [
    {
      id: '2386d7f9-96c4-4870-a6bd-c3e2ed1b6e25',
      name: 'Goku',
      power: 10000,
    },
    {
      id: '7e66fad3-26cb-45c5-81ab-a63f4e39b7ba',
      name: 'Vegeta',
      power: 9999,
    },
    {
      id: '9d83145c-884e-41e9-9625-1edc1d490f97',
      name: 'Trunks',
      power: 8000,
    },
  ];

  getCharacters(): Character[] {
    return [...this.characters];
  }

  addCharacter(character: Character): void {
    this.characters.push({
      ...character,
      id: uuid(),
    });
  }

  deleteCharacter(characterToDelete: Character): void {
    this.characters = this.characters.filter(
      (character) => character.id !== characterToDelete.id
    );
  }
}
