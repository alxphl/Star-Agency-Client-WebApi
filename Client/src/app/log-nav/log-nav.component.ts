import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-log-nav',
  templateUrl: './log-nav.component.html',
  styles: []
})
export class LogNavComponent implements OnInit {
  userDetails
  token
  constructor(private router:Router,private service:UserService) { }

  ngOnInit() {
  this.token=localStorage.getItem('token');
    this.service.getUserProfile().subscribe(
      res=>{
this.userDetails=res;

      },
      err=>{
        console.log(err);
      },
    );
  }
onLogout(){
  localStorage.removeItem('token');
  this.router.navigate(['/user/login']);
}
}
