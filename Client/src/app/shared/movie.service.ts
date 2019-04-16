import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  formData: Movie;
  readonly rootURL = 'http://localhost:51624/api';
  list : Movie[];

  constructor(private http: HttpClient) { }

  postMovieDetail() {
    return this.http.post(this.rootURL + '/Movies', this.formData);
  }
  putMovieDetail() {
    return this.http.put(this.rootURL + '/Movies/'+ this.formData.Id, this.formData);
  }
  deleteMovieDetail(id) {
    return this.http.delete(this.rootURL + '/Movies/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Movies')
    .toPromise()
    .then(res => this.list = res as Movie[]);
  }
  getMovie(index: number) {
    return this.http.get(this.rootURL+'/Movies'+index);
  }

  getMoviesByActorId(id:number){
    return this.http.get(this.rootURL+'/Movies/Actor/'+id);
  }

}
