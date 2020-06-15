import { Component, OnInit } from '@angular/core';
import { GetAnimeService } from 'src/app/services/get-anime.service';
import { Anime } from 'src/app/model/anime.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirePerformance } from '@angular/fire/performance';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { Episode } from 'src/app/model/episode.model';
import { Season } from 'src/app/model/season.model';
import { AddAnimeService } from 'src/app/services/add-anime.service';

@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent implements OnInit {

  editForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    source: new FormControl(''),
    description: new FormControl(''),
    airStartDate: new FormControl(''),
    airEndDate: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    images: new FormArray([]),
    hosts: new FormArray([]),
    youtubeUrl: new FormControl('')
  });

  anime: Anime;
  loaded: boolean = false;
  imgPath: string;
  updated: boolean;
  message: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getAnimeService: GetAnimeService,
    private perf: AngularFirePerformance,
    public router: Router,
    private addAnimeService: AddAnimeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      var animeId = params['id'];
      this.getAnimeService.getAnime(animeId).subscribe((data: Anime) => {
        this.perf.trace('Get Anime Detail');
        this.anime = data;
        this.loaded = true;
        this.initializeForm();
      },
        (error) => {
          console.log(error);
          window.alert(error.error);
          this.router.navigate(['']);
        });
    });
  }

  initializeForm() {
    this.editForm.get('name').setValue(this.anime.name);
    this.editForm.get('source').setValue(this.anime.source);
    this.editForm.get('description').setValue(this.anime.description);
    this.editForm.get('airStartDate').setValue(this.anime.airStartDate);
    this.editForm.get('airEndDate').setValue(this.anime.airEndDate);
    this.editForm.get('image').setValue(this.anime.imagePath);
    this.editForm.get('youtubeUrl').setValue(this.anime.youtubeTrailerUrl);
    if (this.anime.images !== null) {
      for(let image of this.anime.images){
        let control = new FormControl(image);
        (<FormArray>this.editForm.get('images')).push(control);
      }
    }
    if(this.anime.whereToWatch !== null){
      for(let host of this.anime.whereToWatch){
        let control = new FormControl(host);
        (<FormArray>this.editForm.get('hosts')).push(control);
      }
    }
    this.imgPath = this.anime.imagePath;
  }

  changeFile(event: any) {
    this.imgPath = event.target.value;
  }

  onSubmit() {
    this.anime.name = this.editForm.get('name').value;
    this.anime.source = this.editForm.get('source').value;
    this.anime.description = this.editForm.get('description').value;
    this.anime.airStartDate = this.editForm.get('airStartDate').value;
    this.anime.airEndDate = this.editForm.get('airEndDate').value;
    this.anime.imagePath = this.editForm.get('image').value;
    this.anime.youtubeTrailerUrl = this.editForm.get('youtubeUrl').value;
    this.anime.images = this.editForm.get('images').value;
    this.anime.whereToWatch = this.editForm.get('hosts').value;
    this.addAnimeService.addAnime(this.anime).subscribe((data: any) => {
      this.updated = true;
      this.message = 'Anime Updated Successfully';
    },
      (error) => {
        this.updated = false;
        this.message = 'Failed to Update Anime';
      })
  }

  addSeason() {
    let season: Season = new Season();
    season.number = this.anime.seasons.length + 1;
    let episodes: Array<Episode> = [];
    season.episodes = episodes;
    this.anime.seasons.push(season);
    this.addAnimeService.addAnime(this.anime).subscribe((data) => {
      console.log(this.anime)
    });
  }

  editSeason(season: number) {
    this.router.navigate(['../', 'editSeason', season], { relativeTo: this.activatedRoute });
  }

  addImages() {
    const control = new FormControl('');
    (<FormArray>this.editForm.get('images')).push(control);
  }

  addHosts(){
    const control = new FormControl('');
    (<FormArray>this.editForm.get('hosts')).push(control);
  }

  get images() {
    return this.editForm.get('images') as FormArray;
  }

  get hosts(){
    return this.editForm.get('hosts') as FormArray;
  }
}
