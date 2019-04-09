import { Component, OnInit } from '@angular/core';
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

  constructor(private actorService: ActorService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.actor = this.actorService.getActor(this.id);
        }
      );
  }
}