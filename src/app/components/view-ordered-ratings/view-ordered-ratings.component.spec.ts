import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderedRatingsComponent } from './view-ordered-ratings.component';

describe('ViewOrderedRatingsComponent', () => {
  let component: ViewOrderedRatingsComponent;
  let fixture: ComponentFixture<ViewOrderedRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderedRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderedRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
