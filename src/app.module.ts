import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 역할 (라우터 역할)
  providers: [MoviesService],
})
export class AppModule {}
