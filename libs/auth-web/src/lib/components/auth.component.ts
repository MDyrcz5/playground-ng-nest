import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-component',
  template: `<div>
    Auth component <br />
    {{ message }}
  </div>`,
})
export class AuthComponent implements OnInit {
  public message = 'Hello from auth component';
  constructor() {}
  public ngOnInit(): void {}
}
