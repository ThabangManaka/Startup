import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedServicesComponent } from './featured-services.component';

describe('FeaturedServicesComponent', () => {
  let component: FeaturedServicesComponent;
  let fixture: ComponentFixture<FeaturedServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedServicesComponent]
    });
    fixture = TestBed.createComponent(FeaturedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
