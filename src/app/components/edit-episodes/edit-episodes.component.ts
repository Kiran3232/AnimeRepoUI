import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { AngularFirePerformance } from '@angular/fire/performance';
import { AddAnimeService } from 'src/app/services/add-anime.service';
import { Anime } from 'src/app/model/anime.model';

@Component({
  selector: 'app-edit-episodes',
  templateUrl: './edit-episodes.component.html',
  styleUrls: ['./edit-episodes.component.css']
})
export class EditEpisodesComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private getAnimeService: GetAnimeService,
    private perf: AngularFirePerformance,
    public router: Router,
    private addAnimeService: AddAnimeService
  ) { }

  anime: Anime;
  loaded: boolean;
  image: string;
  seasonNumber: number;
  episodeNumber: number;
  success: boolean;
  message: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var animeId = params['id'];
      this.seasonNumber = params['season'];
      this.episodeNumber = params['episode'];
      this.getAnimeService.getAnime(animeId).subscribe((data: Anime) => {
        this.perf.trace('Get Anime Detail');
        this.anime = data;
        this.loaded = true;
        this.image = this.anime.imagePath;
      },
        (error) => {
          console.log(error);
          window.alert(error.error);
          this.router.navigate(['']);
        });
    })
  }

  saveChanges() {
    console.log(this.anime)
    this.addAnimeService.addAnime(this.anime).subscribe((data => {
      this.success = true;
      this.message = 'Updated Successfully'
    }),
      (error) => {
        this.success = false;
        this.message = 'Failed To Update';
      })
  }

}
