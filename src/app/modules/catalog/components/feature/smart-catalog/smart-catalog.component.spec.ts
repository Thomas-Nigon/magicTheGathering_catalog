import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartCatalogComponent } from './smart-catalog.component';

describe('SmartCatalogComponent', () => {
  let component: SmartCatalogComponent;
  let fixture: ComponentFixture<SmartCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
