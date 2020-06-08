import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditAnimeComponent } from './components/edit-anime/edit-anime.component';
import { EditSeasonsComponent } from './components/edit-seasons/edit-seasons.component';
import { EditEpisodesComponent } from './components/edit-episodes/edit-episodes.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'admin/home', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id', component: AnimeDetailComponent },
  { path: 'anime/:id/editAnime', component: EditAnimeComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id/editSeason/:season', component: EditSeasonsComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id/editEpisode/:season/:episode', component: EditEpisodesComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
