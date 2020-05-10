import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddAnimeService } from 'src/app/services/add-anime.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  uploading : string = '';

  animeForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    source: new FormControl(''),
    description: new FormControl(''),
    airStartDate: new FormControl(''),
    airEndDate: new FormControl(''),
    image: new FormControl('')
  })

  constructor(
    private addAnimeService: AddAnimeService
  ) {

  }

  ngOnInit(): void {
  }

  changeFile(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgPath = reader.result;
    }
    this.imageDataToSend = event.target.files[0];
  }

  addAnime(animeForm: FormGroup) {
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
        if(this.progress === 100){
          this.uploading = '';
          this.message = 'Added Successfully';
        }
      }
    },
      err => {
        this.progress = 0;
        this.message = 'Could not add the anime!';
      });
  }

}
