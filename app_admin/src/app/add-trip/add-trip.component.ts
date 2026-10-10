
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Trip } from '../models/trip.model';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-trip.component.html',
  styleUrl: './add-trip.component.css'
})
export class AddTripComponent {
  trip: Trip = new Trip();

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  public onSubmit(): void {
    this.tripDataService.addTrip(this.trip).subscribe({
      next: () => {
        alert('Trip added successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error adding trip:', err);
        alert('There was a problem adding the trip.');
      }
    });
  }
}
