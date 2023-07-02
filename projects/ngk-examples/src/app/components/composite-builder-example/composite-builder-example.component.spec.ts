import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeBuilderExampleComponent } from './composite-builder-example.component';

describe('CompositeBuilderExampleComponent', () => {
  let component: CompositeBuilderExampleComponent;
  let fixture: ComponentFixture<CompositeBuilderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompositeBuilderExampleComponent]
    });
    fixture = TestBed.createComponent(CompositeBuilderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
