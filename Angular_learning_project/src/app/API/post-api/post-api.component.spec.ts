import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSTAPIComponent } from './post-api.component';

describe('POSTAPIComponent', () => {
  let component: POSTAPIComponent;
  let fixture: ComponentFixture<POSTAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [POSTAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POSTAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
