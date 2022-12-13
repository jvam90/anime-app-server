import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeDto } from './dto';

@Controller('anime')
export class AnimeController {
  /**
   *
   */
  constructor(private animeService: AnimeService) {}

  @Post('/')
  postAnimes(@Body() dto: AnimeDto) {
    return this.animeService.postAnimes(dto);
  }

  @Get('/')
  getAnimes() {
    return this.animeService.getAnimes();
  }
}
