import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonneEditComponent } from './abonne-edit.component';

describe('AbonneEditComponent', () => {
  let component: AbonneEditComponent;
  let fixture: ComponentFixture<AbonneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
