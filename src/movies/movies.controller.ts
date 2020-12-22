import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'this will movie api list'
    }

    @Get("search")
    search(@Query('year') searchingYear: string) {
        return `search... ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `this will one ${id} movie api list`
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData)
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') id: string){
        return `this will delete movie`
    }

    @Patch('/:id')
    patch(@Param('id') id: string, @Body() updateData){
        return {
            updatedMovie : id,
            ...updateData
        }
    }

    @Put('/:id')
    put(@Param('id') id: string){
        return `this will put movie`
    }


}
