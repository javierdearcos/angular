import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  txtTagInput!: ElementRef<HTMLInputElement>

  searchTag(): void {
    console.log(this.txtTagInput.nativeElement.value);
  }
}
