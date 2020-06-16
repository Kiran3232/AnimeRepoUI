import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime } from '../model/anime.model';

@Injectable({
  providedIn: 'root'
})
export class AddAnimeService {

  constructor(
    private http : HttpClient
  ) { }

  private baseUrl = 'https://anime-repo.cfapps.io';

  // private baseUrl = 'http://localhost:8080';

  addAnime(anime : Anime){
    return this.http.post(this.baseUrl + '/anime/add',anime);
  }

}
