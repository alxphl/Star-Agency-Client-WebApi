import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Actor } from '../../shared/actor.model';
import { ActorService } from '../../shared/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  actor;
  id: number;
  

  constructor(public actorService: ActorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        this.actor= this.actorService.getActor(this.id).subscribe(              
          posts => this.actor = <Actor>posts,
          error => console.error(error)
      );
        return this.actor;
        }
      );

      
   
  }
   onDelete=function(id) {
    this.actorService.deleteActorDetail(this.id);
    this.router.navigate(['/actors']);
  }
  onEdit(){
    this.router.navigate(['/actors/edit:id']);
  }
}