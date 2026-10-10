
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Trip } from '../models/trip.model';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrl: './edit-trip.component.css'
})
export class EditTripComponent implements OnInit {
  trip: Trip = new Trip();
  tripCode = '';
  errorMessage = '';

  constructor(
    private tripDataService: TripDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripCode = this.route.snapshot.paramMap.get('tripCode') || '';

    if (!this.tripCode) {
      this.errorMessage = 'No trip code was provided.';
      return;
    }

    this.tripDataService.getTripByCode(this.tripCode).subscribe({
      next: (trip) => {
        this.trip = trip;
        this.trip.start = this.trip.start
          ? this.trip.start.substring(0, 10)
          : '';
      },
      error: (err) => {
        console.error('Error loading trip:', err);
        this.errorMessage = 'Could not load trip information.';
      }
    });
  }

  onSubmit(): void {
    this.tripDataService.updateTrip(this.tripCode, this.trip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error updating trip:', err);
        alert('There was a problem updating the trip.');
      }
    });
  }
}
