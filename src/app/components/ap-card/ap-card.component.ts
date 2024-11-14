import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

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
  selector: 'app-ap-card',
  templateUrl: './ap-card.component.html',
  styleUrls: ['./ap-card.component.scss'],
})
export class ApCardComponent implements OnInit {
  @Input() parkingInfo: {
    imageUrl: string;
    description: string;
    status: ParkingBay[];
  } = {
    imageUrl: 'defaultImageUrl.png',
    description: 'No description available',
    status: [],
  };

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    console.log('ApCardComponent initialized with:', this.parkingInfo);
    this.themeService.loadAppTheme();
  }
}
