import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {PriceComponent} from "../price/price.component";
import {AboutComponent} from "../about/about.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'price',
    component: PriceComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
