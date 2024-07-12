import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../core/services/housing/housing.service';
import { HousingLocation } from '../../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationService } from '../../core/services/application/application.service';
import { provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  // housingLocationId = -1;
  housingLocation: HousingLocation | undefined;
  applicationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })
  constructor(private _route: ActivatedRoute, private _housingService: HousingService, private _appService: ApplicationService) {
    const housingLocationId = parseInt(this._route.snapshot.params['id'], 10);
    this._housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() {
    this._appService.submitApplication(
      this.applicationForm.value.firstName ?? "",
      this.applicationForm.value.lastName ?? "",
      this.applicationForm.value.email ?? "",
    )
  }
}
