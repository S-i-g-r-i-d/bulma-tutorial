import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineMediaComponent } from './multiline-media.component';

describe('MultilineMediaComponent', () => {
  let component: MultilineMediaComponent;
  let fixture: ComponentFixture<MultilineMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilineMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilineMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
