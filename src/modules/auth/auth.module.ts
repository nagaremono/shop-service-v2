import { Module } from '@nestjs/common';
import { AppConfigService } from '../../shared/providers/AppConfigService';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthResolver, AuthService, AppConfigService],
})
export class AuthModule {}
