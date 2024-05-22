import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartLogInComponent } from './smart-log-in.component';

describe('SmartLogInComponent', () => {
  let component: SmartLogInComponent;
  let fixture: ComponentFixture<SmartLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
