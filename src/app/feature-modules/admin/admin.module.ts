import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from 'src/app/components/admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from 'src/app/components/admin/admin-login/admin-login.component';
import { EditAnimeComponent } from 'src/app/components/admin/edit/edit-anime/edit-anime.component';
import { EditSeasonsComponent } from 'src/app/components/admin/edit/edit-seasons/edit-seasons.component';
import { EditEpisodesComponent } from 'src/app/components/admin/edit/edit-episodes/edit-episodes.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminLoginComponent,
    EditAnimeComponent,
    EditSeasonsComponent,
    EditEpisodesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
