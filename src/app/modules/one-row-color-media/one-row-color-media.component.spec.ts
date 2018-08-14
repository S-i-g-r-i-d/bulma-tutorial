import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRowColorMediaComponent } from './one-row-color-media.component';

describe('OneRowColorMediaComponent', () => {
  let component: OneRowColorMediaComponent;
  let fixture: ComponentFixture<OneRowColorMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneRowColorMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRowColorMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
