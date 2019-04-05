import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { ContactComponent } from './contact/contact.component';
import { MovieComponent } from './movie/movie.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'actors', component: HomeComponent, children: [
  
    { path: ':id', component: ActorDetailComponent },
    { path: 'add', component: ActorAddComponent },
  ]},
  { path: 'contact', component: ContactComponent },
  { path: 'movie-list', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
