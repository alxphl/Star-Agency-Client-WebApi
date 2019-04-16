import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from'ngx-toastr';
import { ActorService } from '../../shared/actor.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
id:number;
  constructor( private router:Router, private route: ActivatedRoute,public service:ActorService, private toastr:ToastrService) { }

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
    this.service.formData = {
      Id: this.id,
      Name: '',
      Biography: '',
      Gender: '',
      ImagePath:'',
      Movie:[{
        Id:0,
        Name:'',
        Link:'',
        Year:0,
        ActorId:0
       
     
      }]
    
    }
  }

  onSubmit(form: NgForm) {
   
      this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.service.putActorDetail()
    this.router.navigate(['/actors']);
    
  }

}
