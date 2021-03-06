import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  constructor(  private route: ActivatedRoute,public service:MovieService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
 
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
    
        Id:0,
        Name:'',
        Link:'',
        Year:0,
        ActorId:0
       
     
      }
    
    }
  

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postMovieDetail().subscribe();
  }
  updateRecord(form: NgForm) {
    this.service.putMovieDetail();
  }

}
