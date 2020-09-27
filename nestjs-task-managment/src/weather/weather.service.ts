import { HttpService, Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { searchTerms, dataTerm } from './weather.model';

@Injectable()
export class WeatherService {
  constructor(
    private httpServie: HttpService,
    private redisService: RedisService,
  ) {}

  async getWeather(term: searchTerms) {
    const { city } = term;
    let temp = await this.httpServie
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: process.env.KEY,
        },
      })
      .toPromise()
      .then((res: dataTerm) => {
        return res.data.main.temp - 273.15;
      });

    let temp1 = await this.redisService
      .getClient()
      .get(city)
      .then(res => res);

    if (temp1) {
      console.log(temp1, 'comes from cached memory');
      return temp1;
    } else {
      console.log(temp);
      this.redisService.getClient().set(city, temp);
      console.log('comes raw');
      return temp;
    }
  }
}
