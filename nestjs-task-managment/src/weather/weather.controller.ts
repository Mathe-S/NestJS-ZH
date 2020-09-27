import { Body, Controller, Get, Post } from '@nestjs/common';
import { searchTerms } from './weather.model';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  getWeather() {}

  @Post()
  showResults(@Body() city: searchTerms) {
    return this.weatherService.getWeather(city);
  }
}
