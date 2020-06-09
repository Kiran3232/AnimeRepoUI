import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { AngularFirePerformance } from '@angular/fire/performance';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  anime: Anime;
  loaded: boolean = false;
  loggedIn: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getAnimeService: GetAnimeService,
    private perf: AngularFirePerformance,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var animeId = params['id'];
      this.getAnimeService.getAnime(animeId).subscribe((data: Anime) => {
        this.perf.trace('Get Anime Detail');
        this.anime = data;
        this.loaded = true;
      },
      (error) => {
        console.log(error);
        window.alert(error.error);
        this.router.navigate(['']);
      });
    });
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn(){
    this.loggedIn = this.authService.isLoggedIn;
  }

  editAnime(){
    this.router.navigate(['editAnime'],{relativeTo: this.activatedRoute})
  }

}
