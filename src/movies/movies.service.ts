import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll() : Movie[] {
        return this.movies;
    }

    getOne(id:number) : Movie {
        const movie = this.movies.find(m => m.id === id);
        if(!movie) {
            throw new NotFoundException('Movie with ID is not found');
        }
        return movie;
    }

    deleteOne(id: number): void {
        this.getOne(id);
        this.movies = this.movies.filter(m => m.id !== id);
    }
    
    create(movieData: CreateMovieDTO){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id:number, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
