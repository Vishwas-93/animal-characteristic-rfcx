import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAttributeComponent } from './animal-attribute.component';

describe('AnimalAttributeComponent', () => {
  let component: AnimalAttributeComponent;
  let fixture: ComponentFixture<AnimalAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
