import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddAnimeService } from 'src/app/services/add-anime.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  imgPath: any;
  imageDataToSend: any;
  progress = 0;
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
    var reader = new FileReader();
    if (event.target.files[0] !== undefined) {
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (_event) => {
        this.imgPath = reader.result;
      }
      this.imageDataToSend = event.target.files[0];
    }
    else {
      this.imgPath = '';
    }
  }

  addAnime(animeForm: FormGroup) {
    this.submitted = true;
    if (!animeForm.invalid) {
      this.progress = 0;
      var uploadForm = new FormData();
      uploadForm.append('id', animeForm.value.id);
      uploadForm.append('name', animeForm.value.name);
      uploadForm.append('source', animeForm.value.source);
      uploadForm.append('description', animeForm.value.description);
      uploadForm.append('airStartDate', animeForm.value.airStartDate);
      uploadForm.append('airEndDate', animeForm.value.airEndDate);
      uploadForm.append('image', this.imageDataToSend, this.imageDataToSend.name);
      this.addAnimeService.addAnime(uploadForm).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploading = 'true';
          this.progress = Math.round(100 * event.loaded / event.total);
          if (this.progress === 100) {
            this.uploading = '';
            this.message = 'Added Successfully';
            this.success = true;
            this.animeForm.reset();
            this.submitted = false;
          }
        }
      },
        err => {
          this.progress = 0;
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
