import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeQuadrosComponent } from './painel-de-quadros.component';

describe('PainelDeQuadrosComponent', () => {
  let component: PainelDeQuadrosComponent;
  let fixture: ComponentFixture<PainelDeQuadrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelDeQuadrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelDeQuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
