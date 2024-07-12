import { Injectable } from '@angular/core';
import { HousingLocation } from '../../../housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  url = 'http://localhost:3000/locations';

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    // return this.housingLocationList
    const data = await fetch(this.url)
    return (await data.json()) ?? []
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    // return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
    const data = await fetch(`${this.url}`)
    return (await data.json().then((data) => data.find((housingLocation: HousingLocation) => housingLocation.id === id))) ?? {}
  }
}
