import { Injectable } from '@nestjs/common';
import { userInfo } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimeDto } from './dto';

@Injectable()
export class AnimeService {
  constructor(private prismaService: PrismaService) {}

  getAnimes() {
    return 'Animes';
  }
  async postAnimes(dto: AnimeDto) {
    //salvar no banco
    const newUser = await this.prismaService.anime.create({
      data: {
        name: dto.name,
        type: dto.type,
        progress: dto.progress,
      },
      select: {
        name: true,
        type: true,
        progress: true,
      },
    });
    return newUser;
  }
}
