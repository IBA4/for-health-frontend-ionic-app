import { Doctor } from './../doctors';
import { Component, OnInit } from '@angular/core';
import { DOCTORS } from '../mock-doctors';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent implements OnInit {
  doctors = DOCTORS;
  constructor() { }

  ngOnInit() {}

}
