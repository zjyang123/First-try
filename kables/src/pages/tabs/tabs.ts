import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { CartPage } from '../cart/cart';
import { ServicePage } from '../service/service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  tab3Root = CartPage;
  tab4Root = ServicePage;
  

  constructor() {

  }
}
