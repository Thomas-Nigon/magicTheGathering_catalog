import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbSearchCardComponent } from './dumb-search-card.component';

describe('DumbSearchCardComponent', () => {
  let component: DumbSearchCardComponent;
  let fixture: ComponentFixture<DumbSearchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbSearchCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
