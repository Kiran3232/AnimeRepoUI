import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddAnimeService {

  constructor(
    private http : HttpClient
  ) { }

  private baseUrl = 'https://anime-repo-backend.herokuapp.com';

  addAnime(uploadForm : FormData){
    const req = new HttpRequest('POST', `${this.baseUrl}/anime/add`, uploadForm, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

}
