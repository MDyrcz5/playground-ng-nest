import { DataService } from 'libs/data/src/lib/data.service';
import { Injectable } from '@nestjs/common';
import { AuthLoginInput } from './dto';
import { AuthRegisterInput } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly dataService: DataService) {}

  public login(input: AuthLoginInput) {
    throw new Error('Method not implemented.');
  }

  public register(input: AuthRegisterInput) {
    throw new Error('Method not implemented.');
  }
}
