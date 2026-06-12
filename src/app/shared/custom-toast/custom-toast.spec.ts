import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToast } from './custom-toast';

describe('CustomToast', () => {
  let component: CustomToast;
  let fixture: ComponentFixture<CustomToast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomToast],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomToast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
