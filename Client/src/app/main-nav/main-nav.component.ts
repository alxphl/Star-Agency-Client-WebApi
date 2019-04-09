import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  userDetails;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    ngOnInit() {
      this.service.getUserProfile().subscribe(
        res=>{
  
  this.userDetails=res;

        },
        err=>{
          console.log(err);
        
        },
      );
    }
  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private service:UserService) {}
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
