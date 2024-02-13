import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateUsersComponent } from './crate-users.component';

describe('CrateUsersComponent', () => {
  let component: CrateUsersComponent;
  let fixture: ComponentFixture<CrateUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrateUsersComponent]
    });
    fixture = TestBed.createComponent(CrateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
