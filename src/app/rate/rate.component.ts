import { Component, EventEmitter, Output } from '@angular/core';

interface Test {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent {
  testRating!: Test;
  private _selectedRating!: number;
  @Output() sendRating = new EventEmitter<number>();

  set selectedRating(rating: number) {
    this._selectedRating = rating;
  }

  get selectedRating() {
    return this._selectedRating;
  }

  submitRating() {
    this.sendRating.emit(this.selectedRating);
  }
}
