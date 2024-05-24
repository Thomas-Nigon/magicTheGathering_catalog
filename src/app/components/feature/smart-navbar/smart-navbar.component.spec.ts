import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartNavbarComponent } from './smart-navbar.component';

describe('SmartNavbarComponent', () => {
  let component: SmartNavbarComponent;
  let fixture: ComponentFixture<SmartNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
