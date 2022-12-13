import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
