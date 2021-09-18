import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port() {
    return parseInt(this.getEnv('PORT') || '4000', 10);
  }

  private getEnv(key: string) {
    return this.configService.get(key);
  }
}
