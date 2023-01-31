import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapMapComponent } from './switch-map-map.component';

describe('SwitchMapMapComponent', () => {
  let component: SwitchMapMapComponent;
  let fixture: ComponentFixture<SwitchMapMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMapMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
