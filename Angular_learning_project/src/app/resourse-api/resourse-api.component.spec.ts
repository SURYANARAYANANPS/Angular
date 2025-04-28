import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourseAPIComponent } from './resourse-api.component';

describe('ResourseAPIComponent', () => {
  let component: ResourseAPIComponent;
  let fixture: ComponentFixture<ResourseAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourseAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourseAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
