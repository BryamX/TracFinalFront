import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoAtrapaSenasComponent } from './juego-atrapa-senas.component';

describe('JuegoAtrapaSenasComponent', () => {
  let component: JuegoAtrapaSenasComponent;
  let fixture: ComponentFixture<JuegoAtrapaSenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegoAtrapaSenasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegoAtrapaSenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
