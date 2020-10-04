import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import RepoModule from './repo.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RepoModule],
})
export class AppModule {}
