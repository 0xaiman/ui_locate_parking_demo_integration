import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-ap-status',
  templateUrl: './ap-status.component.html',
  styleUrls: ['./ap-status.component.scss'],
})
export class ApStatusComponent implements OnInit {
  @Input() status: ParkingBay[] = [];
  parkingStatus2: { label: string; isAvailable: boolean }[] = [];
  parkingStatus = [
    { label: 'BAY 01', isAvailable: true },
    { label: 'BAY 02', isAvailable: false },
    { label: 'BAY 03', isAvailable: false },
    { label: 'BAY 04', isAvailable: true },
    { label: 'BAY 05', isAvailable: true },
    { label: 'BAY 06', isAvailable: true },
    { label: 'BAY 07', isAvailable: false },
    { label: 'BAY 08', isAvailable: false },
  ];
  constructor(private readonly http: HttpClient) {}

  private updateParkingStatus() {
    this.parkingStatus2 = this.status.map((bay) => ({
      label: bay.name,
      isAvailable: !bay.occupied,
    }));
  }

  ngOnInit() {
    this.updateParkingStatus();
  }

  ngOnChanges() {
    this.updateParkingStatus();
  }
}
