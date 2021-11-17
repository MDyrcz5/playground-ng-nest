import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import(`@playground-ng-nest/auth-web`).then((m) => m.AuthWebModule),
  },
  // {
  //   path: 'restaurants',
  //   loadChildren: () => import('restaurants/Module').then(m => m.RestaurantModule)
  // },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
