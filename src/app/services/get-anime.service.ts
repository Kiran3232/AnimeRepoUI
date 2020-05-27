import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAnimeService {
  
  constructor(private http : HttpClient) { }
  
  private baseUrl = 'https://anime-repo-backend.herokuapp.com';

  getAllAnime(){
    return this.http.get(this.baseUrl+'/anime/all');
  }
}
