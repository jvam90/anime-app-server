import { Body, Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  /**
   *
   */
  constructor(private animeService: AnimeService) {}

  @Get('/')
  getAnimes(@Body() dto: any) {
    console.log(dto);
    return this.animeService.getAnimes();
  }
}
