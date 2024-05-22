import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbLogInComponent } from './dumb-log-in.component';

describe('DumbLogInComponent', () => {
  let component: DumbLogInComponent;
  let fixture: ComponentFixture<DumbLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
