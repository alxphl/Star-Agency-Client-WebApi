import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Actor } from '../../shared/actor.model';
import { ActorService } from '../../shared/actor.service';

@Component({
  selector: 'app-actor-delete',
  templateUrl: './actor-delete.component.html',
  styleUrls: []
})
export class ActorDeleteComponent implements OnInit {
  actor;
  id: number;
  public constructor(public actorService: ActorService,
    private route: ActivatedRoute,
    private router: Router) {
}


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
         
          this.initForm();
       console.log("id="+this.id);
     // this.router.navigate(['/actors']);
       // return this.actor;
        }
      );
}
private initForm() {
  console.log(this.actorService.deleteActorDetail(this.id));
  this.actorService.deleteActorDetail(this.id).subscribe((data)=>{
    console.log("success");
});
}
}
