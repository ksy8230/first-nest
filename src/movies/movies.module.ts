import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    controllers: [MoviesController],
    providers: [MoviesService] // provider가 해당 파일의 모든 것들을 import하기 때문에 컨트롤러에서 MoviesService 타입 지정만으로도 잘 동작하는 것
})
export class MoviesModule {}
