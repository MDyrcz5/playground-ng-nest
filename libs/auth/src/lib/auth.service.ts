import { AuthHelper } from './auth.helper';
import { DataService } from 'libs/data/src/lib/data.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthLoginInput, AuthRegisterInput, JwtDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@playground-ng-nest/auth';

@Injectable()
export class AuthService {
  // private _user?: User | null;

  constructor(private readonly dataService: DataService, private readonly jwtService: JwtService) {}

  public async login(input: AuthLoginInput) {
    const user = await this.dataService.findUserByEmail(input.email);

    if (!user) {
      throw new NotFoundException('User doesnt exist');
    }

    // this._user = user;

    const passwordValid = await AuthHelper.validatePassword(input.password, user.password);
    if (!passwordValid) {
      throw new Error('Invalid password');
    }

    return { user, token: this.signToken(user.id) };
  }

  public async register(input: AuthRegisterInput) {
    const user = await this.dataService.findUserByEmail(input.email);
    if (user) {
      throw new BadRequestException(`Cannot register with email ${input.email}`);
    }

    const hashedPassword = await AuthHelper.hash(input.password);
    const createdUser = await this.dataService.createUser(input.email, hashedPassword);
    return { user: createdUser, token: this.signToken(createdUser.id) };
  }

  public async validateUser(userId: string) {
    return this.dataService.findUserById(userId);
  }

  // public get user(): User | null {
  //   return this._user;
  // }

  private signToken(userId: string) {
    const payload: JwtDto = { userId };
    return this.jwtService.sign(payload);
  }
}
