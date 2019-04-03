import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorComponent } from './actor/actor.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'actors', component: ActorListComponent },
  { path: 'actors/add', component: ActorComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
