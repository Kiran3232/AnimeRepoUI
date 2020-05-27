import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animeList: Array<Anime>;
  loaded: boolean = false;

  constructor(
    public getAnimeService: GetAnimeService
  ) { }

  ngOnInit(): void {
    this.getAnimeService.getAllAnime().subscribe((data: any) => {
      this.animeList = data;
      this.loaded = true;
    })
  }

}
