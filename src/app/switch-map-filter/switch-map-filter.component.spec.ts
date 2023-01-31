import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapFilterComponent } from './switch-map-filter.component';

describe('SwitchMapFilterComponent', () => {
  let component: SwitchMapFilterComponent;
  let fixture: ComponentFixture<SwitchMapFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMapFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
