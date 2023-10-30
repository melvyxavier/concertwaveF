import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertViewComponent } from './concert-view.component';

describe('ConcertViewComponent', () => {
  let component: ConcertViewComponent;
  let fixture: ComponentFixture<ConcertViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertViewComponent]
    });
    fixture = TestBed.createComponent(ConcertViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
