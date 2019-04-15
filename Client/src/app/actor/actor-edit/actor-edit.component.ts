import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ActorService } from '../../shared/actor.service'
import { Actor } from 'src/app/shared/actor.model';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  id: number;
  editMode = false;
  actorForm: FormGroup;
actor:Actor;
  constructor(private route: ActivatedRoute,
              private actorService: ActorService,
              private router: Router) {
  }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let actorName = '';
   // let actorImagePath = '';
    let actorBiography = '';
    let actorMovie = new FormArray([]);

    if (this.editMode) {
       this.actorService.getActor(this.id).subscribe(              
        posts => this.actor = <Actor>posts,
        error => console.error(error));
      actorName = this.actor.Name;
   //   actorImagePath = actor.imagePath;
      actorBiography = this.actor.Biography;
      if (this.actor['Movie']) {
        for (let movie of this.actor.Movie) {
          actorMovie.push(
            new FormGroup({
              'Name': new FormControl(null, Validators.required),
              'Year': new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
              'Link': new FormControl(null, Validators.required)
      
            })
          );
        }
      }
    }


this.actorForm = new FormGroup({
  'Name': new FormControl(actorName, Validators.required),
// 'imagePath': new FormControl(actorImagePath, Validators.required),
  'Biography': new FormControl(actorBiography, Validators.required),
  'Movie': actorMovie
});
}
onCancel() {
  this.router.navigate([''], {relativeTo: this.route});
}
onSubmit() {

  if (this.editMode) {
    this.actorService.putActorDetail(this.id, this.actorForm.value);
  } else {
    this.actorService.postActorDetail(this.actorForm.value);
  }
  this.onCancel();
}
}
