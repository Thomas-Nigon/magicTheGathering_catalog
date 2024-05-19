import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbHomeComponent } from './dumb-home.component';

describe('DumbHomeComponent', () => {
  let component: DumbHomeComponent;
  let fixture: ComponentFixture<DumbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
