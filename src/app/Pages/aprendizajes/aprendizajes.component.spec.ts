import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizajesComponent } from './aprendizajes.component';

describe('AprendizajesComponent', () => {
  let component: AprendizajesComponent;
  let fixture: ComponentFixture<AprendizajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AprendizajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendizajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
