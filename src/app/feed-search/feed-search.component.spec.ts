import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedSearchComponent } from './feed-search.component';

describe('FeedSearchComponent', () => {
  let component: FeedSearchComponent;
  let fixture: ComponentFixture<FeedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
