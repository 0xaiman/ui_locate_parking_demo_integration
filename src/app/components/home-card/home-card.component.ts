import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  backgroundImage = 'assets/images/card.jpg';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadAppTheme();
  }
}
