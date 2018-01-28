import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListContainerComponent } from './dashboard-list-container.component';

describe('DashboardListContainerComponent', () => {
  let component: DashboardListContainerComponent;
  let fixture: ComponentFixture<DashboardListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
