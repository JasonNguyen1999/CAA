import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsComponent } from './education-details.component';

describe('EducationDetailsComponent', () => {
  let component: EducationDetailsComponent;
  let fixture: ComponentFixture<EducationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
