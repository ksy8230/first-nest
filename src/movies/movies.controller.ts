import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
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
    getOne(@Param('id') id: string): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData)
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') id: string){
        return this.moviesService.deleteOne(id);
    }

    @Patch('/:id')
    patch(@Param('id') id: string, @Body() updateData){
        return this.moviesService.update(id, updateData);
    }

    @Put('/:id')
    put(@Param('id') id: string){
        return `this will put movie`
    }


}
