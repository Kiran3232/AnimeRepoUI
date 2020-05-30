import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddAnimeService } from 'src/app/services/add-anime.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Anime } from 'src/app/model/anime.model';
import { Season } from 'src/app/model/season.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  imgPath: any;
  imageDataToSend: any;
  message = '';
  fileInfos: Observable<any>;
  uploading: string = '';
  success: boolean;
  submitted: boolean;

  animeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    source: new FormControl(''),
    description: new FormControl(''),
    airStartDate: new FormControl(''),
    airEndDate: new FormControl(''),
    image: new FormControl('', [Validators.required])
  })

  constructor(
    private addAnimeService: AddAnimeService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
  }

  changeFile(event: any) {
    this.imgPath = event.target.value;
  }

  // addAnime(animeForm: FormGroup) {
  //   this.submitted = true;
  //   if (!animeForm.invalid) {
  //     this.progress = 0;
  //     var uploadForm = new FormData();
  //     uploadForm.append('id', animeForm.value.id);
  //     uploadForm.append('name', animeForm.value.name);
  //     uploadForm.append('source', animeForm.value.source);
  //     uploadForm.append('description', animeForm.value.description);
  //     uploadForm.append('airStartDate', animeForm.value.airStartDate);
  //     uploadForm.append('airEndDate', animeForm.value.airEndDate);
  //     uploadForm.append('image', this.imageDataToSend, this.imageDataToSend.name);
  //     this.addAnimeService.addAnime(uploadForm).subscribe((event) => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.uploading = 'true';
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //         if (this.progress === 100) {
  //           this.uploading = '';
  //           this.message = 'Added Successfully';
  //           this.success = true;
  //           this.animeForm.reset();
  //           this.submitted = false;
  //         }
  //       }
  //     },
  //       err => {
  //         this.progress = 0;
  //         this.message = 'Could not add the anime!';
  //         this.success = false;
  //       });
  //   }
  // }

  addAnime() {
    this.submitted = true;
    if (!this.animeForm.invalid) {
      var anime: Anime = new Anime();
      anime.airStartDate = this.animeForm.value.airStartDate;
      anime.airEndDate = this.animeForm.value.airEndDate;
      anime.description = this.animeForm.value.description;
      anime.imagePath = this.animeForm.value.image;
      anime.name = this.animeForm.value.name;
      var seasons: Array<Season> = [];
      anime.seasons = seasons;
      anime.source = this.animeForm.value.source;
      this.addAnimeService.addAnime(anime).subscribe((data: any) => {
        this.success = true;
        this.submitted = false;
        this.animeForm.reset();
        this.imgPath = '';
        this.message = 'Added Successfully';
      },
        (err) => {
          this.message = 'Could not add the anime!';
          this.success = false;
        });
    }
  }

  logout() {
    this.authService.logOut();
  }

  get form() {
    return this.animeForm.controls;
  }
}
