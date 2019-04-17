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
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';
import { ActorDeleteComponent } from './actor/actor-delete/actor-delete.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieDeleteComponent } from './movie/movie-delete/movie-delete.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';

const routes: Routes =[
  { path: '', redirectTo: '/actors', pathMatch: 'full' },
  { path: 'actors', component: ActorListComponent},
  { path: 'actors/add', component: ActorAddComponent },
  { path: 'actors/:id', component: ActorDetailComponent,canActivate:[AuthGuard] },
  {path:'actors/edit/:id',component:ActorEditComponent,canActivate:[AuthGuard]},
  {path:'actors/delete/:id',component:ActorDeleteComponent,canActivate:[AuthGuard]},
  { path: 'contact', component: ContactComponent },
  { path: 'movie-list', component: MovieComponent,canActivate:[AuthGuard] },
  { path: 'movie-list/add', component: MovieAddComponent,canActivate:[AuthGuard] },
  { path: 'movie-list/:id', component: MovieDetailComponent,canActivate:[AuthGuard] },
  { path: 'movie-list/delete/:id', component: MovieDeleteComponent,canActivate:[AuthGuard] },
  { path: 'movie-list/edit/:id', component: MovieEditComponent,canActivate:[AuthGuard] },
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
