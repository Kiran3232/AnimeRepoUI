import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAnimeService {
  
  constructor(private http : HttpClient) { }
  
  private baseUrl = 'https://anime-repo.cfapps.io/';

  // private baseUrl = 'http://localhost:8080';

  getAllAnime(){
    return this.http.get(this.baseUrl+'/anime/all');
  }

  getAnime(animeId : string){
    return this.http.post(this.baseUrl+'/anime/get',animeId);
  }

  searchAnime(value : string){
    return this.http.post(this.baseUrl + '/anime/search',value);
  }
}
