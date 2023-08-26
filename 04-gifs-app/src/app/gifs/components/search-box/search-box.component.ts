import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  txtTagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  searchTag(): void {
    const newTag = this.txtTagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.txtTagInput.nativeElement.value = '';
  }
}
