import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from'ngx-toastr';
import { MovieService } from '../shared/movie.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(public service:MovieService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
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
    this.service.postMovieDetail().subscribe(
      res => {
        debugger;
    //    this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Movie has been added inside DataBase');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
   /* this.service.putMovieDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Movie has been changed inside DataBase');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )*/
  }

}
