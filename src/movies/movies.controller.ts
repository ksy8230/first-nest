import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `search... ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') id: number): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO){
        console.log(movieData)
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') id: number){
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:id')
    patch(@Param('id') id: number, @Body() updateData: UpdateMovieDTO){
        return this.moviesService.update(id, updateData);
    }

    @Put('/:id')
    put(@Param('id') id: number){
        return `this will put movie`
    }


}
