import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Actor } from '../../shared/actor.model';
import { ActorService } from '../../shared/actor.service';
import { MovieService } from 'src/app/shared/movie.service';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor;
  id: number;
  movieList;
  

 public constructor(public actorService: ActorService,
              private route: ActivatedRoute,
              private router: Router,
              public movieService:MovieService
              ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        this.actor= this.actorService.getActor(this.id).subscribe(              
          posts => this.actor = <Actor>posts,
          error => console.error(error)
      );
        this.getMovies();
        return this.actor;
        }
      ); 
  }


getMovies(){
  this.movieList=this.movieService.getMoviesByActorId(this.id).subscribe(              
    posts => this.movieList = <Movie[]>posts,
    error => console.error(error)
);
return this.movieList;
}

  
  public onDelete(id) {
  
    
    this.router.navigate(['/actors/delete:id']);
  }
  onEdit(){
    this.router.navigate(['/actors/edit:id']);
  }
}