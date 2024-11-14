import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-fmc-card',
  templateUrl: './fmc-card.component.html',
  styleUrls: ['./fmc-card.component.scss'],
})
export class FmcCardComponent {
  numberPlate!: string;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {}

  onSubmit() {
    if (this.numberPlate) {
      this.router.navigate(['/tabs/locate-result'], {
        queryParams: {
          plateNumber: this.numberPlate,
          pillar: 'W13',
          bay: '24',
        },
      });
    }
  }

  ngOnInit() {
    this.themeService.loadAppTheme();
  }
}
