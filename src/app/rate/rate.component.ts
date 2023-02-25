import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Test {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['../dialog.component.scss', './rate.component.scss']
})
export class RateComponent {
  @Input() selectedRating!: number | undefined;
  @Output() sendRating = new EventEmitter<number>();

  submitRating() {
    this.sendRating.emit(this.selectedRating);
  }
}
