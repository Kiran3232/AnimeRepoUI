import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/services/auth.guard';
import { AdminLoginComponent } from 'src/app/components/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from 'src/app/components/admin/admin-dashboard/admin-dashboard.component';
import { EditAnimeComponent } from 'src/app/components/admin/edit/edit-anime/edit-anime.component';
import { EditSeasonsComponent } from 'src/app/components/admin/edit/edit-seasons/edit-seasons.component';
import { EditEpisodesComponent } from 'src/app/components/admin/edit/edit-episodes/edit-episodes.component';
import { AddAnimeComponent } from 'src/app/components/admin/add-anime/add-anime.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  { path: 'home', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddAnimeComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id/editAnime', component: EditAnimeComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id/editSeason/:season', component: EditSeasonsComponent, canActivate: [AuthGuard] },
  { path: 'anime/:id/editEpisode/:season/:episode', component: EditEpisodesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }