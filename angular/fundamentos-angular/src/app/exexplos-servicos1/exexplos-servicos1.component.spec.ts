import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExexplosServicos1Component } from './exexplos-servicos1.component';

describe('ExexplosServicos1Component', () => {
  let component: ExexplosServicos1Component;
  let fixture: ComponentFixture<ExexplosServicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExexplosServicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExexplosServicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
