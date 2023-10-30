import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserMngComponent } from './adminuser-mng.component';

describe('AdminuserMngComponent', () => {
  let component: AdminuserMngComponent;
  let fixture: ComponentFixture<AdminuserMngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminuserMngComponent]
    });
    fixture = TestBed.createComponent(AdminuserMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
