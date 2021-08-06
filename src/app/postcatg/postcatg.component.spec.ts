import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcatgComponent } from './postcatg.component';

describe('PostcatgComponent', () => {
  let component: PostcatgComponent;
  let fixture: ComponentFixture<PostcatgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcatgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcatgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
