import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  formData: Actor;
  readonly rootURL = 'http://localhost:51624/api';
  list : Actor[];

  constructor(private http: HttpClient) { }

  postActorDetail() {
    return this.http.post(this.rootURL + '/Actors', this.formData);
  }
  putActorDetail() {
    return this.http.put(this.rootURL + '/Actors/'+ this.formData.Id, this.formData);
  }
  deleteActorDetail(id) {
    return this.http.delete(this.rootURL + '/Actors/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Actors')
    .toPromise()
    .then(res => this.list = res as Actor[]);
  }
}
