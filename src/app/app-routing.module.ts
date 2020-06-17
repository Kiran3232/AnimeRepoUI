import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/anime/home' , pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./feature-modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'anime', loadChildren: () => import('./feature-modules/anime/anime.module').then(m => m.AnimeModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
