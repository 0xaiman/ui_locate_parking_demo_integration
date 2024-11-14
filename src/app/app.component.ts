import { Component, OnInit } from '@angular/core';
import { GetOccupancyStatusService } from './services/api/get-occupancy-status.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private getStatusService: GetOccupancyStatusService) {}
  ngOnInit(): void {
    this.getStatusService.getParkingBays().subscribe({
      next: (data: any) => console.log('Parking bays loaded:', data),
      error: (err: any) => console.error('Error loading parking bays:', err),
    });
  }
}
