import { APP_ROUTES } from './app.routes';
import { GraphQLModule } from '@playground-ng-nest/core-web';
import { AuthWebModule } from '@playground-ng-nest/auth-web';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking' }),
    RouterModule,
    AuthWebModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
