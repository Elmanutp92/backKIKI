import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';

  async getCharacters() {
    const response = await axios.get(`${this.baseUrl}/character`);
    return response.data;
  }

  async getInfo() {
    const response = await axios.get(`${this.baseUrl}/character`);
    return response.data.info;
  }

  async getCharacterById(id: number) {
    const response = await axios.get(`${this.baseUrl}/character/${id}`);
    return response.data;
  }

  async getEpisodes() {
    const response = await axios.get(`${this.baseUrl}/episode`);
    return response.data;
  }

  async getEpisodeById(id: number) {
    const response = await axios.get(`${this.baseUrl}/episode/${id}`);
    return response.data;
  }
}
