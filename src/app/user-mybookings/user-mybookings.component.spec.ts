import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMybookingsComponent } from './user-mybookings.component';

describe('UserMybookingsComponent', () => {
  let component: UserMybookingsComponent;
  let fixture: ComponentFixture<UserMybookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMybookingsComponent]
    });
    fixture = TestBed.createComponent(UserMybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
