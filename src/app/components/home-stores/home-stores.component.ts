import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Store {
  imgUrl: string;
  name: string;
}

@Component({
  selector: 'app-home-stores',
  templateUrl: './home-stores.component.html',
  styleUrls: ['./home-stores.component.scss'],
})
export class HomeStoresComponent implements OnInit {
  allStores: Store[] = [
    { imgUrl: 'assets/images/Mr_DIY.png', name: 'Mr DIY' },
    { imgUrl: 'assets/images/family_store.png', name: 'Family Store' },
    { imgUrl: 'assets/images/guardian.png', name: 'Guardian' },
    { imgUrl: 'assets/images/mmcineplexes.png', name: 'mmCINEPLEXES' },
    { imgUrl: 'assets/images/superbowl.png', name: 'Superbowl' },
  ];

  visibleStores: Store[] = [];

  constructor(private router: Router) {}

  navigateToAvailablePark(store: Store) {
    this.router.navigate(['/tabs/available-park'], {
      queryParams: {
        imageUrl: store.imgUrl,
        description: `Nearest Parking for ${store.name}`,
      },
    });
  }

  ngOnInit() {
    this.visibleStores = this.allStores;
  }
}
