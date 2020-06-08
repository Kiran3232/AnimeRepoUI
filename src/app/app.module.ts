import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirePerformanceModule } from "@angular/fire/performance";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { EditAnimeComponent } from './components/edit-anime/edit-anime.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditSeasonsComponent } from './components/edit-seasons/edit-seasons.component';
import { EditEpisodesComponent } from './components/edit-episodes/edit-episodes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    HomeComponent,
    EditAnimeComponent,
    AnimeDetailComponent,
    PageNotFoundComponent,
    EditSeasonsComponent,
    EditEpisodesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirePerformanceModule,
    BrowserAnimationsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
