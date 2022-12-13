import { Injectable } from '@nestjs/common';
import { Anime } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimeService {
  /**
   *
   */
  constructor(private prisma: PrismaService) {}
  getAnimes() {
    return 'Animes';
  }
}
