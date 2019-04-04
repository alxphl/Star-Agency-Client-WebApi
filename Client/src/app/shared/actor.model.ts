import { Movie } from './movie.model';
import { Photo } from './photo.model';

export class Actor{
    Id:number;
    Name:string;
    Biography:string;
    Gender:string;
    Movie:Movie[];
    Photo:Photo[];
    ImagePath: string;
    constructor(name: string, desc: string, movies: Movie[],gnd:string,photo:Photo[],imagePath: string) {
        this.Name = name;
        this.Biography = desc;
        this.Movie = movies;
        this.Gender=gnd;
        this.Photo=photo;
        this.ImagePath=imagePath;
    }
}