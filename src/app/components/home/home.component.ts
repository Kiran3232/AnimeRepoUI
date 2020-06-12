import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { Router } from '@angular/router';
import { AngularFirePerformance } from '@angular/fire/performance';
import { CommonsService } from 'src/app/services/commons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animeList: Array<Anime>;
  loaded: boolean = false;

  constructor(
    public getAnimeService: GetAnimeService,
    private perf: AngularFirePerformance,
    public router: Router,
    public commonsService: CommonsService
  ) { }

  ngOnInit(): void {
    this.getAnimeService.getAllAnime().subscribe((data: any) => {
      this.perf.trace('Load Anime Data');
      this.animeList = data;
      this.loaded = true;
    })
  }

  openAnimeDetail(anime : Anime){
    this.commonsService.currentAnime = anime;
    this.router.navigate(['anime',anime.id]);
  }

}
