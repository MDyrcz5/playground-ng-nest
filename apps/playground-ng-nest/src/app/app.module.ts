// import { AuthModuleAngular } from '@playground-ng-nest/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RouterModule,
    DragDropModule,
    MatButtonModule,
    // AuthModuleAngular,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
