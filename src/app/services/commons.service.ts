import { Injectable } from '@angular/core';
import { Anime } from '../model/anime.model';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  _currentAnime: Anime;

  constructor() { }

  set currentAnime(anime: Anime) {
    this._currentAnime = anime;
  }

  get currentAnime(){
    return this._currentAnime; 
  }
}
