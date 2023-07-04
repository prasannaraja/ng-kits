import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeBuilderComponent } from './composite-builder.component';

describe('CompositeBuilderComponent', () => {
  let component: CompositeBuilderComponent;
  let fixture: ComponentFixture<CompositeBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompositeBuilderComponent],
    });
    fixture = TestBed.createComponent(CompositeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
