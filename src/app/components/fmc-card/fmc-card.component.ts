import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FindMyCarService } from 'src/app/services/api/find-my-car.service';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-fmc-card',
  templateUrl: './fmc-card.component.html',
  styleUrls: ['./fmc-card.component.scss'],
})
export class FmcCardComponent {
  numberPlate!: string;
  vehicleDetails: any | null = null;
  notFoundImage: string = 'src/assets/images/404notfound.png';

  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private findMyCarService: FindMyCarService,
  ) {}

  ngOnInit() {
    this.themeService.loadAppTheme();
  }

  // Method to handle the form submission
  onSubmit() {
    if (this.numberPlate) {
      this.subscription.add(
        this.findMyCarService.findMyCar(this.numberPlate).subscribe(
          (response) => {
            console.log('Car found:', response);
            this.vehicleDetails = response; // Assign received data to vehicleDetails
          },
          (error) => {
            console.error('Error finding car:', error);
            this.vehicleDetails = {
              licensePlate: 'Not Found',
              parkingBay: 'N/A',
              parkingFloor: 'N/A',
              image: this.notFoundImage,
            };
          },
        ),
      );
    } else {
      console.error('Please enter a valid number plate.');
    }
  }

  // To clean up the subscription when the component is destroyed
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
