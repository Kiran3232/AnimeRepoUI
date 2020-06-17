import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEpisodesComponent } from './edit-episodes.component';

describe('EditEpisodesComponent', () => {
  let component: EditEpisodesComponent;
  let fixture: ComponentFixture<EditEpisodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEpisodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
