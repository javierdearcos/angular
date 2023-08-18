import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characters: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<Character> = new EventEmitter();

  emitDeleteCharacter(character: Character): void {
    this.onDeleteCharacter.emit(character);
  }
}
