import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponentComponent } from './signup-form-component.component';

describe('SignupFormComponentComponent', () => {
  let component: SignupFormComponentComponent;
  let fixture: ComponentFixture<SignupFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
