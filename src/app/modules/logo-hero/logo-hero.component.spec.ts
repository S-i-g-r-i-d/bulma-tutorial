import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHeroComponent } from './logo-hero.component';

describe('LogoHeroComponent', () => {
  let component: LogoHeroComponent;
  let fixture: ComponentFixture<LogoHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
