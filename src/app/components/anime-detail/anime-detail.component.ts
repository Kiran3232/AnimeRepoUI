import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { AngularFirePerformance } from '@angular/fire/performance';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  anime : Anime;
  loaded : boolean = false;

  constructor(
    private activatedRoute : ActivatedRoute,
    private getAnimeService : GetAnimeService,
    private perf: AngularFirePerformance,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.perf.trace('Get Anime Detail');
      var animeId = params['id'];
      this.getAnimeService.getAnime(animeId).subscribe((data : Anime) => {
        this.anime = data;
        this.loaded = true;
      });
    })
  }

}
