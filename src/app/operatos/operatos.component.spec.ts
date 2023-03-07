import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatosComponent } from './operatos.component';

describe('OperatosComponent', () => {
  let component: OperatosComponent;
  let fixture: ComponentFixture<OperatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
