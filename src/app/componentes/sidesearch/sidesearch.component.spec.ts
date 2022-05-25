import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidesearchComponent } from './sidesearch.component';

describe('SidesearchComponent', () => {
  let component: SidesearchComponent;
  let fixture: ComponentFixture<SidesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
