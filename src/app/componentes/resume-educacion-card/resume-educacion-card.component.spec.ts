import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEducacionCardComponent } from './resume-educacion-card.component';

describe('ResumeEducacionCardComponent', () => {
  let component: ResumeEducacionCardComponent;
  let fixture: ComponentFixture<ResumeEducacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeEducacionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEducacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
