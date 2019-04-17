import { Injectable } from '@angular/core';
import { Actor } from './actor.model';
import { HttpClient } from '@angular/common/http';
import { Api_Key } from 'ApiKey';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  formData: Actor;
 
  readonly rootURL=Api_Key; 
  list : Actor[];

  constructor(private http: HttpClient) { }


  getActor(id:number){
     return this.http.get(this.rootURL + '/Actors/' + id);
  
  }

  postActorDetail() {
    
    return this.http.post(this.rootURL + '/Actors', this.formData);
  }
  putActorDetail() {
    return this.http.put(this.rootURL + '/Actors/'+ this.formData.Id,this.formData, {headers:{'Content-Type':'application/json'}}).subscribe(

      data  => {
      
      console.log("PUT Request is successful ", data);
      
      },
      
      error  => {
      
      console.log("Error", error);
      
      }
      
      );;
  }
  deleteActorDetail(id:number) {
    return this.http.delete(this.rootURL + '/Actors/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Actors')
    .toPromise()
    .then(res => this.list = res as Actor[]);
  }
}
