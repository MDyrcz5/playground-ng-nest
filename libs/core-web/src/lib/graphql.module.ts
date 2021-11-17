import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost:3333/graphql'; // change it to proper after try outs

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({ uri: uri }),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
