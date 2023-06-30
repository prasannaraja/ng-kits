import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgkTailwindcssComponent } from './ngk-tailwindcss.component';

describe('NgkTailwindcssComponent', () => {
  let component: NgkTailwindcssComponent;
  let fixture: ComponentFixture<NgkTailwindcssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgkTailwindcssComponent]
    });
    fixture = TestBed.createComponent(NgkTailwindcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
