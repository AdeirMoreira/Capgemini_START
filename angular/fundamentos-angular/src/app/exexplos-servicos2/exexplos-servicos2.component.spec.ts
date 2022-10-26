import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExexplosServicos2Component } from './exexplos-servicos2.component';

describe('ExexplosServicos2Component', () => {
  let component: ExexplosServicos2Component;
  let fixture: ComponentFixture<ExexplosServicos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExexplosServicos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExexplosServicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
