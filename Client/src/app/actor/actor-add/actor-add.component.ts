import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from'ngx-toastr';
import { ActorService } from '../../shared/actor.service';
import{Actor} from'../../shared/actor.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-actor-add',
  templateUrl: './actor-add.component.html',
  styleUrls: ['./actor-add.component.css']
})
export class ActorAddComponent implements OnInit {

  constructor(  private route: ActivatedRoute,public service:ActorService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
 
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      Id: 0,
      Name: '',
      Biography: '',
      Gender: '',
      ImagePath:'',
      Movie:[{
        Id:0,
        Name:'',
        Link:'',
        Year:0,
       
     
      }]
    
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postActorDetail().subscribe(
      res => {
        debugger;
    //    this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Actor has been registered inside DataBase');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putActorDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Actor has been updated inside DataBase');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
