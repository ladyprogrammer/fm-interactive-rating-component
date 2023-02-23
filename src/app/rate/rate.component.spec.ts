import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first, tap } from 'rxjs';

import { RateComponent } from './rate.component';

interface Test {
  id: number;
  name: string;
}

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ratings button', () => {
    it('should change background color when clicked', () => {
      const rating1 = fixture.nativeElement.querySelector('[data-test="rating-1"]');
      const label1 = rating1.querySelector('label');
      const style = window.getComputedStyle(label1);
      const defaultBackgroundColor = style.getPropertyValue('background-color');
      label1.click();
      fixture.detectChanges();
      const hoverBackgroundColor =  style.getPropertyValue('background-color');
      expect(hoverBackgroundColor).not.toBe(defaultBackgroundColor);
    });

    it('should select a rating', () => {
      const RATED_5 = 5;
      const rating5 = fixture.nativeElement.querySelector('[data-test="rating-5"]');
      rating5.click();
      expect(component.selectedRating).toBe(RATED_5);
    });
  });

  xdescribe('submit button', () => {
    it('should send value out the component', () => {
      let selectedRating: Test | undefined;
      component.sendRating
        .pipe(
          first(),
          tap(x => console.log(x))
        )
        .subscribe(() => {
          (rating: Test) => selectedRating = rating
        });

      component.testRating = { id: 1, name: 'Sparkles' };
      // console.log(component.testRating);

      const submitButton = fixture.debugElement.query(By.css('[data-test="submit"]'));
      submitButton.triggerEventHandler('click');

      expect(selectedRating).toEqual({ id: 2, name: ''} as Test);
    });
  });
});