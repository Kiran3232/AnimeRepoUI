import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // searchForm: FormGroup = new FormGroup({
  //   name: new FormControl('')
  // });

  constructor() { }

  ngOnInit(): void {
  }

}
