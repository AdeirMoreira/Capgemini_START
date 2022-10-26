import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAwayDataBindingComponent } from './two-away-data-binding.component';

describe('TwoAwayDataBindingComponent', () => {
  let component: TwoAwayDataBindingComponent;
  let fixture: ComponentFixture<TwoAwayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoAwayDataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoAwayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
