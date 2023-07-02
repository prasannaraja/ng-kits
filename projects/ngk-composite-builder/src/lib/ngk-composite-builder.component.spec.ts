import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgkCompositeBuilderComponent } from './ngk-composite-builder.component';

describe('NgkCompositeBuilderComponent', () => {
  let component: NgkCompositeBuilderComponent;
  let fixture: ComponentFixture<NgkCompositeBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgkCompositeBuilderComponent]
    });
    fixture = TestBed.createComponent(NgkCompositeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
