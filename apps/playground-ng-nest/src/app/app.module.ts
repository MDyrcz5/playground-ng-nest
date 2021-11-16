import { RestaurantList } from './containers/exchange-rates/restaurant-list.component';
import { GraphQLModule } from '@playground-ng-nest/core-web';
import { AuthWebModule } from '@playground-ng-nest/auth-web';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, RestaurantList],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RouterModule,
    AuthWebModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
