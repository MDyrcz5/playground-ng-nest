import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AuthComponent,
      },
      // {
      //   path: 'registration',
      //   component: RegistrationComponent
      // }
    ],
  },
];

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [AuthComponent],
  exports: [AuthComponent, RouterModule],
})
export class AuthWebModule {}
