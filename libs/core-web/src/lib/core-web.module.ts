import { GraphQLModule } from './graphql.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [CommonModule, GraphQLModule],
  exports: [],
})
export class CoreWebModule {}
