import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'plg-restaurant-list',
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error :(</div>
    <div *ngIf="restaurants">
      <div *ngFor="let restaurant of restaurants">
        <p>{{ restaurant.name }}: {{ restaurant.id }}</p>
      </div>
    </div>
  `,
})
export class RestaurantList implements OnInit {
  public restaurants?: any[];
  public loading = true;
  public error: any;

  constructor(private apollo: Apollo) {}

  public ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            restaurants {
              name
              id
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.restaurants = result?.data?.restaurants;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
