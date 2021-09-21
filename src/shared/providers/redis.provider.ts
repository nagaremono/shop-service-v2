import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { AppConfigService } from './AppConfigService';

@Injectable()
export class RedisProvider extends Redis {
  constructor(appConfigService: AppConfigService) {
    super(appConfigService.redisUrl);
  }
}
