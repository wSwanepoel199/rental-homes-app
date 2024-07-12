import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../housing-location';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing_location.component.html',
  styleUrl: './housing_location.component.css'
})
export class HousingLocationComponent {
  @Input()
  housingLocation!: HousingLocation;
}
