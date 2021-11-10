import { ConfigService } from '@nestjs/config';
import { Injectable, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DataService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly admin_user: { email: string; password: string } = {
    email: this.config.get('admin').email,
    password: this.config.get('admin').password,
  };

  constructor(private readonly config: ConfigService) {
    super();
  }

  public async onModuleInit() {
    await this.$connect();
    await this.ensureAdminUserExists();
  }

  public async onModuleDestroy() {
    await this.$disconnect();
  }

  public async createUser(email: string, password: string) {
    const user = await this.user.create({ data: { email, password } });
    return user;
  }

  public async findUserByEmail(email: string) {
    return this.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async findUserById(userId: string) {
    return this.user.findFirst({
      where: {
        id: userId,
      },
    });
  }

  private async ensureAdminUserExists(): Promise<void> {
    const foundedUser = this.findUserByEmail(this.admin_user.email);
    if (!foundedUser) {
      await this.createUser(this.admin_user.email, this.admin_user.password);
    }
    Logger.log('User already exists in DB');
  }
}
