import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperprofileComponent } from './developerprofile.component';

describe('DeveloperprofileComponent', () => {
  let component: DeveloperprofileComponent;
  let fixture: ComponentFixture<DeveloperprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
