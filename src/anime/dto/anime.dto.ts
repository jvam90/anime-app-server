import { IsNotEmpty } from 'class-validator';

export class AnimeDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  progress: string;
  @IsNotEmpty()
  type: string;
}
