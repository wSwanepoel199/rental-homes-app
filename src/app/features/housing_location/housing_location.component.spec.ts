import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing_location.component';
import { RouterModule } from '@angular/router';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent, RouterModule.forRoot([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      id: 1,
      name: 'Acme Fresh Start Housing',
      city: 'San Francisco',
      state: 'CA',
      photo: '',
      availableUnits: 4,
      wifi: true,
      laundry: true,
      pets: true,
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
