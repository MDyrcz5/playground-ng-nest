import { AuthHelper } from './auth.helper';
import { DataService } from 'libs/data/src/lib/data.service';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AuthLoginInput } from './dto';
import { AuthRegisterInput } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly dataService: DataService) {}

  public async login(input: AuthLoginInput) {
    const user = await this.dataService.findUserByEmail(input.email);
    if (!user) {
      throw new NotFoundException('User doesnt exist');
    }

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

  private signToken(userId: string) {
    return 'TEMP TOKEN ID' + userId;
  }
}
