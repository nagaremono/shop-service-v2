import { Module } from '@nestjs/common';
import { AppConfigService } from '../../shared/providers/AppConfigService';
import { RedisProvider } from '../../shared/providers/redis.provider';
import { CartResolver } from './cart.resolver';
import { CartService } from './cart.service';
import { PurchaseResolver } from './purchase.resolver';
import { PurchaseService } from './purchase.service';

@Module({
  providers: [
    RedisProvider,
    PurchaseService,
    PurchaseResolver,
    CartResolver,
    CartService,
    AppConfigService,
  ],
})
export class PurchaseModule {}
