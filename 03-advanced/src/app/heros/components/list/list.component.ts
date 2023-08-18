import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public heroNames: string[] = [...ListComponentConstants.DEFAULT_HEROS];
  public lastElementRemoved?: string;

  removeLastHero(): void {
    if (this.heroNames.length > 0) {
      this.lastElementRemoved = this.heroNames.pop();
    }
  }

  resetHeros(): void {
    this.heroNames = [...ListComponentConstants.DEFAULT_HEROS];
    delete this.lastElementRemoved;
  }

  ListComponentConstants = ListComponentConstants;
}

class ListComponentConstants {
  public static readonly DEFAULT_HEROS: string[] = [
    'Spiderman',
    'Iron Man',
    'Hulk',
    'Thor',
  ];
}
