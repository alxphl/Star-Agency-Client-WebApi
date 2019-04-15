import {ActorService} from './../../shared/actor.service';
import{Component,OnInit, Output, ViewChild, Input} from '@angular/core';

@Component({
    selector:'app-actor-list',
    templateUrl:'./actor-list.component.html',
    styleUrls:['./actor-list.component.css']
})
export class ActorListComponent implements OnInit{
@Input() id:number;
   
    constructor(public service:ActorService) {
      
        
    }
    ngOnInit(){
this.service.refreshList();
    }
}