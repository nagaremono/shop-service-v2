import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { AppConfigService } from './shared/providers/AppConfigService';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService = app.get(AppConfigService);
  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  await app.listen(appConfigService.port);
}
bootstrap();
