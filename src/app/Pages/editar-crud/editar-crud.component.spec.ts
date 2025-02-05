import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCrudComponent } from './editar-crud.component';

describe('EditarCrudComponent', () => {
  let component: EditarCrudComponent;
  let fixture: ComponentFixture<EditarCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
