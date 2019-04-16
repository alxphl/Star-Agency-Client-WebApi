import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/movie.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
id:number;
  constructor(public movieService:MovieService,private route:ActivatedRoute,private router:Router) { }


   ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      })
    this.resetForm();
 
  } 
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.movieService.formData = {
      Id: this.id,
      Name: '',
      Link: '',
      Year: 0,
      ActorId:0,
     
      }
    
    }
  

  onSubmit(form: NgForm) {
   
      this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.movieService.putMovieDetail(); 
    this.router.navigate(['/movie-list']);   
  }

}