import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AnimeModule, PrismaModule],
})
export class AppModule {}
