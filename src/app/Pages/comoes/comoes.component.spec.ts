import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoesComponent } from './comoes.component';

describe('ComoesComponent', () => {
  let component: ComoesComponent;
  let fixture: ComponentFixture<ComoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
