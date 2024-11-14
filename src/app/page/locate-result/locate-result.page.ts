import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locate-result',
  templateUrl: './locate-result.page.html',
  styleUrls: ['./locate-result.page.scss'],
})
export class LocateResultPage implements OnInit {
  vehicleData = [
    {
      plateNumber: 'CCC444',
      pillar: 'W13',
      bay: '24',
      image: 'assets/images/vehicle.jpg',
    },
  ];

  vehicleImage: string | null = '';
  plateNumber: string | null = '';
  pillar: string | null = '';
  bay: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.plateNumber = params['plateNumber'];
      this.pillar = params['pillar'];
      this.bay = params['bay'];

      const vehicle = this.vehicleData.find(
        (v) => v.plateNumber === this.plateNumber
      );
      if (vehicle) {
        this.vehicleImage = vehicle.image;
      }
    });
  }
}
