import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
// import { WeatherModule } from './weather/weather.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TasksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
