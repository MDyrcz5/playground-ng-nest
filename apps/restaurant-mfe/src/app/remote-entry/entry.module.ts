import { GraphQLModule } from '@playground-ng-nest/core-web';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RestaurantList } from './containers/restaurant-list.component';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent, RestaurantList],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
    GraphQLModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
