import { Component } from '@angular/core';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please Subscribe',
      message: 'Please subscribe the packages to get support and advice from doctors right at your home.',
      buttons: ['OK']
    });

    await alert.present();
};
}
