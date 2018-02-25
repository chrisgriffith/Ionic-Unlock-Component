import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  unlocked = false;

  constructor(public navCtrl: NavController) {

  }

  unlockedHandler(event: boolean) {
    console.log(event);
    this.unlocked = event;
  }

}
