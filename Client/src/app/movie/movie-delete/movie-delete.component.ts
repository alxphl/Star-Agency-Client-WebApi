import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {
movie;
id:number;
  constructor(public movieService:MovieService,
    private route:ActivatedRoute,
    private router:Router) { }


    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
           
            this.initForm();
         console.log("id="+this.id);
       });
  }


  private initForm() {
    console.log(this.movieService.deleteMovieDetail(this.id));
    this.movieService.deleteMovieDetail(this.id).subscribe((data)=>{
      console.log("success");
  });
  }

}
