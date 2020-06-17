import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { HomeComponent } from 'src/app/components/anime/home/home.component';
import { AnimeDetailComponent } from 'src/app/components/anime/anime-detail/anime-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':id', component: AnimeDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeRoutingModule { }
