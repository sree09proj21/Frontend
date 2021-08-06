import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostCrComponent } from './user-post-cr.component';

describe('UserPostCrComponent', () => {
  let component: UserPostCrComponent;
  let fixture: ComponentFixture<UserPostCrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostCrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostCrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
