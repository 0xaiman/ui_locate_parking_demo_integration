import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.loadAppTheme();
  }

  loadAppTheme() {
    this.darkMode = this.themeService.isDarkMode();
    this.themeService.loadAppTheme();
  }
}
