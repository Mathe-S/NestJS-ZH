import { HttpModule, Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { RedisModule } from 'nestjs-redis';
import { redisOptions } from './weather.model';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
  imports: [HttpModule, RedisModule.register(redisOptions)],
})
export class WeatherModule {}
