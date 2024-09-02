import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import {RouterModule} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-housing-location',
  imports:[RouterModule],
  template: `
  <main>
    <a [routerLink]="['/details', housingLocation.id]">
      <section class="listing">
        <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin/>
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </section>
    </a>
  </main>

`,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
