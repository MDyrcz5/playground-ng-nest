import { DataModule } from '@playground-ng-nest/data';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [DataModule],
  controllers: [],
  providers: [AuthResolver, AuthService],
  exports: [],
})
export class AuthModule {}
