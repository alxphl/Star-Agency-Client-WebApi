import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { ContactComponent } from './contact/contact.component';
import { MovieComponent } from './movie/movie.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes =[
  { path: '', redirectTo: '/actors', pathMatch: 'full' },
  { path: 'actors', component: ActorListComponent},
  
    { path: 'actors/:id', component: ActorDetailComponent },
    { path: 'actors/add', component: ActorAddComponent,canActivate:[AuthGuard] },

  { path: 'contact', component: ContactComponent },
  { path: 'movie-list', component: MovieComponent,canActivate:[AuthGuard] },
  {path:"user",component:UserComponent,children:[
    {path:"registration",component:RegistrationComponent},
    {path:"login",component:LoginComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
