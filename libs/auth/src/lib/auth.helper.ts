import { compare, hash } from 'bcryptjs';

export class AuthHelper {
  static validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }
  static hash(password: string): Promise<string> {
    return hash(password, 10);
  }
}
