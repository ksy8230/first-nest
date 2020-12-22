import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return 'this will movie api list'
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `this will one ${id} movie api list`
    }

    @Post()
    create(){

    }

    @Delete('/:id')
    remove(@Param('id') id: string){
        return `this will delete movie`
    }

    @Patch('/:id')
    patch(@Param('id') id: string){
        return `this will patch movie`
    }

    @Put('/:id')
    put(@Param('id') id: string){
        return `this will put movie`
    }
}
