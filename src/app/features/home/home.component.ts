import { Component } from "@angular/core";
import { HousingLocationComponent } from "../housing_location/housing_location.component";
import { HousingLocation } from "../../housing-location";
import { CommonModule } from "@angular/common";
import { HousingService } from "../../core/services/housing/housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  constructor(private _housingService: HousingService){
    this._housingService.getAllHousingLocation()
    .then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList
    });
  }
  filterResults(text: string) {
    if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    )
  }
}
