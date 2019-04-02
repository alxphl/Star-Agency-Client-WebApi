import { Movie } from './movie.model';
import { Photo } from './photo.model';

export class Actor{
    Id:number;
    Name:string;
    Biography:string;
    Gender:string;
    Movie:Movie;
    Photo:Photo;

}