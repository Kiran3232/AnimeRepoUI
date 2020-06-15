import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { AngularFirePerformance } from '@angular/fire/performance';
import { AuthService } from 'src/app/services/auth.service';
import * as $ from 'jquery';
import { CommonsService } from 'src/app/services/commons.service';

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
    private authService: AuthService,
    private commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var animeId = params['id'];
      var anime = this.commonsService.currentAnime;
      if (anime !== undefined && anime.id === animeId) {
        this.anime = anime;
        this.loaded = true;
      }
      else {
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
      }
    });
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn;
  }

  editAnime() {
    this.router.navigate(['editAnime'], { relativeTo: this.activatedRoute });
  }

  rotate(event: Event, season: number) {
    var id = '#season' + season;
    if (!$(id).hasClass('show')) {
      $(id + '-chevron').addClass("down");
    }
    else {
      $(id + '-chevron').removeClass("down");
    }
  }

  getHosting(value: string) {
    if (value.indexOf('netflix') !== -1) {
      return 'Netflix';
    }
    return 'KissAnime';
  }
}
