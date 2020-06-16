import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { AngularFirePerformance } from '@angular/fire/performance';
import { AddAnimeService } from 'src/app/services/add-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { Episode } from 'src/app/model/episode.model';

@Component({
  selector: 'app-edit-seasons',
  templateUrl: './edit-seasons.component.html',
  styleUrls: ['./edit-seasons.component.css']
})
export class EditSeasonsComponent implements OnInit {

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
  message: string;
  success: boolean;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var animeId = params['id'];
      this.seasonNumber = params['season'];
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

  addEpisode() {
    let episode: Episode = new Episode();
    episode.number = this.anime.seasons[this.seasonNumber - 1].episodes.length + 1;
    this.anime.seasons[this.seasonNumber - 1].episodes.push(episode);
  }

  editEpisode(episode: number) {
    this.router.navigate(['../../', 'editEpisode', this.seasonNumber, episode], { relativeTo: this.activatedRoute });
  }

  saveChange() {
    this.addAnimeService.addAnime(this.anime).subscribe((data: any) => {
      this.success = true;
      this.message = 'Updated Successfully';
    },
      (error) => {
        this.success = false;
        this.message = 'Failed To Update';
      })
  }
}
