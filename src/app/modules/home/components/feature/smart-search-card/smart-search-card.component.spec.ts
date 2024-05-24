import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartSearchCardComponent } from './smart-search-card.component';

describe('SmartSearchCardComponent', () => {
  let component: SmartSearchCardComponent;
  let fixture: ComponentFixture<SmartSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartSearchCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
