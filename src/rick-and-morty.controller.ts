import { Controller, Get, Param } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';

@Controller('rick-and-morty')
export class RickAndMortyController {
  constructor(private readonly rickAndMortyService: RickAndMortyService) {}

  @Get('characters')
  async getCharacters() {
    return this.rickAndMortyService.getCharacters();
  }

  @Get('characters/:id')
  async getCharacterById(@Param('id') id: number) {
    return this.rickAndMortyService.getCharacterById(id);
  }

  @Get('episodes')
  async getEpisodes() {
    return this.rickAndMortyService.getEpisodes();
  }

  @Get('episodes/:id')
  async getEpisodeById(@Param('id') id: number) {
    return this.rickAndMortyService.getEpisodeById(id);
  }
}
