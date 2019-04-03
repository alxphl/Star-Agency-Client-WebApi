import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from'ngx-toastr';
import { ActorService } from '../shared/actor.service';
@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  constructor(private service:ActorService, private toastr:ToastrService) { }

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
      Movie:{
        Id:0,
        Name:'',
        Link:'',
        Year:0,
        Actor:this.service.formData
      },
      Photo:{
        Id:0,
        ImagePath:'',
        Actor:this.service.formData
      }
    
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
        this.resetForm(form);
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
