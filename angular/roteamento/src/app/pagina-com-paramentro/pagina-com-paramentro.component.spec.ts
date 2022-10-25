import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComParamentroComponent } from './pagina-com-paramentro.component';

describe('PaginaComParamentroComponent', () => {
  let component: PaginaComParamentroComponent;
  let fixture: ComponentFixture<PaginaComParamentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaComParamentroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComParamentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
