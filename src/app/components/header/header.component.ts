import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Anime } from 'src/app/model/anime.model';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // searchForm: FormGroup = new FormGroup({
  //   name: new FormControl('')
  // });

  animeList: Array<Anime> = [];

  constructor(
    private getAnimeService: GetAnimeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchAnime(event: any) {
    var searchValue: string = event.target.value;
    if (searchValue.length !== 0) {
      document.getElementById('search-icon').style.display = 'none';
      this.getAnimeService.searchAnime(searchValue).subscribe((data: any) => {
        this.animeList = data;
      })
    }
    else {
      document.getElementById('search-icon').style.display = 'block';
      this.animeList = [];
    }
  }

  openAnime(anime: Anime) {
    this.router.navigate(['anime', anime.id]);
  }

}
