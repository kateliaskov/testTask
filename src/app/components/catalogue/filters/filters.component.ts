import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  nameValue: String;
  rangePrice: number[] = [20, 180];
  showWithoutPhotos: boolean = true;
}
