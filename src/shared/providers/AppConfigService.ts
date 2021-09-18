import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port() {
    return parseInt(this.getEnv('PORT') || '4000', 10);
  }

  get cookieName() {
    return this.getEnv('COOKIE_NAME') || 'qid';
  }

  get redisUrl() {
    return this.getRequiredEnv('REDIS_URL');
  }

  get nodeEnv() {
    return this.getEnv('NODE_ENV') || 'development';
  }

  get sessionSecret() {
    return this.getRequiredEnv('SESSION_SECRET');
  }

  private getEnv(key: string) {
    return this.configService.get(key);
  }

  private getRequiredEnv(key: string) {
    const value = this.configService.get(key);
    if (!value) {
      throw new Error(`${key} environment variable is not set`);
    }
    return value;
  }
}
