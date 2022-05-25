import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetafactsComponent } from './tarjetafacts.component';

describe('TarjetafactsComponent', () => {
  let component: TarjetafactsComponent;
  let fixture: ComponentFixture<TarjetafactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetafactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetafactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
