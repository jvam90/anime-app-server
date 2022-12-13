import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimeService {
  getAnimes() {
    return 'Animes';
  }
}
