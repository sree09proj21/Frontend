import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpostvwComponent } from './upostvw.component';

describe('UpostvwComponent', () => {
  let component: UpostvwComponent;
  let fixture: ComponentFixture<UpostvwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpostvwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpostvwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
