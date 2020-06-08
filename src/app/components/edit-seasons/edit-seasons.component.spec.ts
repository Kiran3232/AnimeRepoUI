import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeasonsComponent } from './edit-seasons.component';

describe('EditSeasonsComponent', () => {
  let component: EditSeasonsComponent;
  let fixture: ComponentFixture<EditSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
