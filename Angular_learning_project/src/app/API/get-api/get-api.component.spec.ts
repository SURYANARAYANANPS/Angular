import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GETAPIComponent } from './get-api.component';

describe('GETAPIComponent', () => {
  let component: GETAPIComponent;
  let fixture: ComponentFixture<GETAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GETAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GETAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
