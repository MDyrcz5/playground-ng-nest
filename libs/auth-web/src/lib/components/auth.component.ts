import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'auth-component',
  template: ` <section [formGroup]="loginForm">
    <input type="text" placeholder="login" formControlName="login" />
    <input type="text" placeholder="password" formControlName="password" />
    <button (click)="submitForm()">Submit</button>
  </section>`,
})
export class AuthComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: [],
      password: [],
    });
  }

  public submitForm() {
    console.log(this.loginForm.value);
  }
}
