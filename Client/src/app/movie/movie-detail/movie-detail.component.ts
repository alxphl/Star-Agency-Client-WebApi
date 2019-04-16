import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
id:number;
movie;
  constructor(public movieService:MovieService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      this.movie= this.movieService.getMovie(this.id).subscribe(              
        posts => this.movie = <Movie>posts,
        error => console.error(error)
    );
    return this.movie;
  });
}


  
public onDelete(id) {
  
    
  this.router.navigate(['/movie-list/delete:id']);
}
onEdit(){
  this.router.navigate(['/movie-list/edit:id']);
}
}
