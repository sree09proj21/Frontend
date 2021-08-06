import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoneComponent } from './postone.component';

describe('PostoneComponent', () => {
  let component: PostoneComponent;
  let fixture: ComponentFixture<PostoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
