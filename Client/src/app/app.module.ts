import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import {AlertModule} from 'ngx-bootstrap';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LogNavComponent } from './log-nav/log-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';
import { ActorDeleteComponent } from './actor/actor-delete/actor-delete.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieDeleteComponent } from './movie/movie-delete/movie-delete.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ActorAddComponent,
    MainNavComponent,
    HomeComponent,
    ContactComponent,
    ActorListComponent,
    MovieComponent,
    ActorDetailComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    LogNavComponent,
    DropdownDirective,
    ActorEditComponent,
    ActorDeleteComponent,
    MovieDetailComponent,
    MovieDeleteComponent,
    MovieEditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AlertModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ActorService,MovieService,UserService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
