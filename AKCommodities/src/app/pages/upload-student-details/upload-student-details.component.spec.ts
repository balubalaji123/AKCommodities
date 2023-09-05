import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadStudentDetailsComponent } from './upload-student-details.component';

describe('UploadStudentDetailsComponent', () => {
  let component: UploadStudentDetailsComponent;
  let fixture: ComponentFixture<UploadStudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadStudentDetailsComponent]
    });
    fixture = TestBed.createComponent(UploadStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
