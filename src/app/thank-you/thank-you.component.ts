import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['../dialog.component.scss', './thank-you.component.scss']
})
export class ThankYouComponent {
  @Input() selectedRating!: number;

}
