import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostVwComponent } from './user-post-vw.component';

describe('UserPostVwComponent', () => {
  let component: UserPostVwComponent;
  let fixture: ComponentFixture<UserPostVwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostVwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
