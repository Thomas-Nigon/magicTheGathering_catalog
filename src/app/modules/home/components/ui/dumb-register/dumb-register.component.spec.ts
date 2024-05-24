import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbSignInComponent } from './dumb-register.component';

describe('DumbSignInComponent', () => {
  let component: DumbSignInComponent;
  let fixture: ComponentFixture<DumbSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbSignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DumbSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
