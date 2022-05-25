import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputshowComponent } from './inputshow.component';

describe('InputshowComponent', () => {
  let component: InputshowComponent;
  let fixture: ComponentFixture<InputshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
