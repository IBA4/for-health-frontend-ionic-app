import { FilterPipe } from './../filter.pipe';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HospitalCardComponent } from '../hospital-card/hospital-card.component';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';
import { SearchViewComponent } from '../search-view/search-view.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page,
    HospitalCardComponent,
    DoctorCardComponent,
    SearchViewComponent,
    FilterPipe
  ]
})
export class Tab1PageModule {}
