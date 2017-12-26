import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListCardComponent } from './property-list-card.component';

describe('PropertyListCardComponent', () => {
  let component: PropertyListCardComponent;
  let fixture: ComponentFixture<PropertyListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
