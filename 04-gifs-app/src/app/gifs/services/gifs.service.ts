import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable()
export class GifsService {
  public gifList: Gif[] = [];

  private _tagsHistory: string[] = this.loadTagHistoryFromLocalStorage();

  private giphyApiUrl = 'http://api.giphy.com/v1/gifs';

  constructor(private client: HttpClient) {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (!tag.length) {
      return;
    }

    this.addToHistory(tag);
    this.saveTagHistoryIntoLocalStorage();

    const params = new HttpParams()
      .set('api_key', environment.giphyApiKey)
      .set('limit', '10')
      .set('q', tag);

    this.client
      .get<SearchResponse>(`${this.giphyApiUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });
  }

  private addToHistory(tag: string): void {
    const newTag = tag.toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => tag !== newTag);
    }

    this._tagsHistory.unshift(newTag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  private loadTagHistoryFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem('tagHistory')!) || [];
  }

  private saveTagHistoryIntoLocalStorage(): void {
    localStorage.setItem('tagHistory', JSON.stringify(this._tagsHistory));
  }
}
