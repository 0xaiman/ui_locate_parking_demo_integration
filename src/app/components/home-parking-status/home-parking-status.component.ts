import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface ParkingStatus {
  floor: string;
  available: number;
  total: number;
}

interface Stats {
  floorId: number;
  floorName: string;
  unoccupied: string; // Ensure this matches the API response
}

@Component({
  selector: 'app-home-parking-status',
  templateUrl: './home-parking-status.component.html',
  styleUrls: ['./home-parking-status.component.scss'],
})
export class HomeParkingStatusComponent implements OnInit {
  parkingStatus: ParkingStatus[] = [
    {
      floor: 'B1',
      available: 50,
      total: 100,
    },
    {
      floor: 'LG',
      available: 72,
      total: 100,
    },
    {
      floor: 'G',
      available: 20,
      total: 100,
    },
    {
      floor: 'LG2',
      available: 60,
      total: 100,
    },
  ];

  stats: Stats[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  apiUrl = 'http://127.0.0.1:3000/parking-bay/operator/1/stats';

  getStats(): Observable<Stats[]> {
    return this.http.get<Stats[]>(this.apiUrl);
  }

  ngOnInit() {
    this.getStats().subscribe(
      (data: Stats[]) => {
        this.stats = data;
        console.log(this.stats);
      },
      (error) => {
        console.error('Error fetching stats:', error);
      },
    );
  }

  // navigateToAvailablePark(parking: ParkingStatus) {
  //   this.router.navigate(['/tabs/available-park'], {
  //     queryParams: {
  //       description: `Available Parking for ${parking.floor}`,
  //       floor: parking.floor,
  //     },
  //   });
  // }

  navigateToAvailablePark(parking: Stats) {
    this.router.navigate(['/tabs/available-park'], {
      queryParams: {
        description: `Available Parking for ${parking.floorName}`,
        floor: parking.floorName,
        floorId: parking.floorId,
      },
    });
  }
}
