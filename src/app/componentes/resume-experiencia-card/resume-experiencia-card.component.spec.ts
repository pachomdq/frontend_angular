import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExperienciaCardComponent } from './resume-experiencia-card.component';

describe('ResumeExperienciaCardComponent', () => {
  let component: ResumeExperienciaCardComponent;
  let fixture: ComponentFixture<ResumeExperienciaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeExperienciaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExperienciaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
