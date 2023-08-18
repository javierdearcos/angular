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
  onDeleteCharacterIndex: EventEmitter<number> = new EventEmitter();

  emitDeleteCharacterIndex(characterIndex: number): void {
    this.onDeleteCharacterIndex.emit(characterIndex);
  }
}
