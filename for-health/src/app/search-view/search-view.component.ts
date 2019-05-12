import { DoctorCardComponent } from './../doctor-card/doctor-card.component';
import { HospitalCardComponent } from './../hospital-card/hospital-card.component';
import { Component, OnInit } from '@angular/core';

export type SearchType = 'hospital' | 'doctor';
@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})

export class SearchViewComponent implements OnInit {
  searcher: SearchType = 'hospital';

  get showHospitalCard() {
    return this.searcher === 'hospital';
  }

  get showDoctorCard() {
    return this.searcher === 'doctor';
  }

  toggleSearch(type: SearchType) {
    this.searcher = type;
  }

  constructor() { }

  ngOnInit() {}

}
