import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxesComponent } from './comboboxes.component';

describe('ComboboxesComponent', () => {
  let component: ComboboxesComponent;
  let fixture: ComponentFixture<ComboboxesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboboxesComponent]
    });
    fixture = TestBed.createComponent(ComboboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
