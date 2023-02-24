import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _selectedRating: number | undefined;

  constructor() {
    this._selectedRating = undefined;
  }

  set selectedRating(rating: number | undefined) {
    this._selectedRating = rating;
  }

  get selectedRating() {
    return this._selectedRating;
  }

  saveRating(rating: number) {
    this.selectedRating = rating;
  }
}
