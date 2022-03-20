import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFasesComponent } from './cards-fases.component';

describe('CardsFasesComponent', () => {
  let component: CardsFasesComponent;
  let fixture: ComponentFixture<CardsFasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsFasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
