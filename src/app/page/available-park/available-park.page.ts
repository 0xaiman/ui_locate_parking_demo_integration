import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ParkingBay {
  id: number;
  name: string;
  occupied: boolean;
  device_id: number | null;
  createdAt: string;
  updatedAt: string;
  floorId: number;
  floorName: string;
  operatorName: string;
}
@Component({
  selector: 'app-available-park',
  templateUrl: './available-park.page.html',
  styleUrls: ['./available-park.page.scss'],
})
export class AvailableParkPage implements OnInit {
  parkingInfo: { imageUrl: string; description: string } | undefined;
  parkingInfo2: {
    imageUrl: string;
    description: string;
    status: ParkingBay[];
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.parkingInfo2 = { imageUrl: '', description: '', status: [] };
  }

  getBayStatus(floorId: number) {
    return this.http.get<any[]>(
      `http://127.0.0.1:3000/parking-bay/operator/1/floor/${floorId}`,
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        console.log(params);
        this.getBayStatus(params['floorId']).subscribe(
          (bayStatus) => {
            if (this.parkingInfo2) {
              this.parkingInfo2.status = bayStatus;
            } else {
              console.error('parkingInfo2 is undefined');
            }
          },
          (error) => {
            console.error('Error fetching stats:', error);
          },
        );
        this.parkingInfo = {
          imageUrl: params['imageUrl'],
          description: params['description'],
        };
        console.log('AvailableParkPage ngOnInit', this.parkingInfo2);
      }
    });
  }

  // Custom refresh functionality
  doRefresh(event: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
