import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconcertviewComponent } from './userconcertview.component';

describe('UserconcertviewComponent', () => {
  let component: UserconcertviewComponent;
  let fixture: ComponentFixture<UserconcertviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserconcertviewComponent]
    });
    fixture = TestBed.createComponent(UserconcertviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
