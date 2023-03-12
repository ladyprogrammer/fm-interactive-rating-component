import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _selectedRating?: number;

  constructor() {
  }

  set selectedRating(rating: number) {
    this._selectedRating = rating;
  }

  get selectedRating() {
    return this._selectedRating!;
  }

  saveRating(rating: number) {
    this.selectedRating = rating;
  }
}
