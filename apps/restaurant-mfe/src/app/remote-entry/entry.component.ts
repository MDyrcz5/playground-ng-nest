import { Component } from '@angular/core';

@Component({
  selector: 'playground-ng-nest-restaurant-mfe-entry',
  template: `<div class="remote-entry">
      <h2>restaurant-mfe's Remote Entry Component</h2>
    </div>
    <plg-restaurant-list></plg-restaurant-list>`,

  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
