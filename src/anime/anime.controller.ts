import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  /**
   *
   */
  constructor(private animeService: AnimeService) {}

  @Get('/')
  getAnimes() {
    return this.animeService.getAnimes();
  }
}
