import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  @Input()
  src!: string;
  @Input()
  alt?: string;

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('"src" property is required.');
    }
  }
}
