import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAnimeService.getAllAnime().subscribe((data: any) => {
      console.log(data);
      this.animeList = data;
      this.loaded = true;
    })
  }

  openAnimeDetail(anime : Anime){
    this.router.navigate(['anime',anime.id]);
  }

}
