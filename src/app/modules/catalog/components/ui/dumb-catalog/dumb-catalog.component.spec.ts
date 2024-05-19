import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbCatalogComponent } from './dumb-catalog.component';

describe('DumbCatalogComponent', () => {
  let component: DumbCatalogComponent;
  let fixture: ComponentFixture<DumbCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
