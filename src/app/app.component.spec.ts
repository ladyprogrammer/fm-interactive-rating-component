import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RateComponent } from './rate/rate.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, RateComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  xit('should show rate form by default', () => {
    const rateComponent = fixture.nativeElement.querySelector('[data-test="rate-component"]');
    expect(rateComponent).toBeTruthy();
  });
});
