import { HOSPITALS } from './../mock-hospitals';
import { Component, OnInit } from '@angular/core';
import { Hospital } from "../hospital";

@Component({
  selector: 'app-hospital-card',
  templateUrl: './hospital-card.component.html',
  styleUrls: ['./hospital-card.component.scss'],
})
export class HospitalCardComponent implements OnInit {
  hospitals = HOSPITALS;

  constructor() { }

  ngOnInit() {}

}
