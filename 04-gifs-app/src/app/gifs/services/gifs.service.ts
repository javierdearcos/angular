import { Injectable } from '@angular/core';

@Injectable()
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (!tag.length) {
      return;
    }
    this.addToHistory(tag);
  }

  private addToHistory(tag: string): void {
    const newTag = tag.toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }
}
