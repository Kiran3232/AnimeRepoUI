import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { HomeComponent } from 'src/app/components/anime/home/home.component';
import { AnimeDetailComponent } from 'src/app/components/anime/anime-detail/anime-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimeDetailComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule
  ]
})
export class AnimeModule { }
