import { JwtStrategy } from './strategies/jwt.strategy';
import { DataModule } from '@playground-ng-nest/data';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    DataModule,
    JwtModule.register({
      secret: 'PLAYGROUND-SECRET-987-?',
    }),
  ],
  controllers: [],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [],
})
export class AuthModule {}
