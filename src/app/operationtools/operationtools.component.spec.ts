import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPERATIONTOOLSComponent } from './operationtools.component';

describe('OPERATIONTOOLSComponent', () => {
  let component: OPERATIONTOOLSComponent;
  let fixture: ComponentFixture<OPERATIONTOOLSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPERATIONTOOLSComponent]
    });
    fixture = TestBed.createComponent(OPERATIONTOOLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
