import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ActorService } from './shared/actor.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './shared/movie.service';



@NgModule({
  declarations: [
    AppComponent,
    ActorAddComponent,
    MainNavComponent,
    HomeComponent,
    ContactComponent,
    ActorListComponent,
    MovieComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ActorService,MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
