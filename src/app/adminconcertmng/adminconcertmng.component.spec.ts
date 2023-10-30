import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconcertmngComponent } from './adminconcertmng.component';

describe('AdminconcertmngComponent', () => {
  let component: AdminconcertmngComponent;
  let fixture: ComponentFixture<AdminconcertmngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminconcertmngComponent]
    });
    fixture = TestBed.createComponent(AdminconcertmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
