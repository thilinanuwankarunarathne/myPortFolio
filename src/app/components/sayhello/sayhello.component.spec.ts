import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayhelloComponent } from './sayhello.component';

describe('SayhelloComponent', () => {
  let component: SayhelloComponent;
  let fixture: ComponentFixture<SayhelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayhelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayhelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
