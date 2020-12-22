import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

@Module({
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행하는 역할 (라우터 역할)
  providers: [],
})
export class AppModule {}
