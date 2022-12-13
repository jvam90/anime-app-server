import { Body, Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeDto } from './dto';

@Controller('anime')
export class AnimeController {
  /**
   *
   */
  constructor(private animeService: AnimeService) {}

  @Get('/')
  getAnimes(@Body() dto: AnimeDto) {
    console.log(dto);
    return this.animeService.getAnimes();
  }
}
