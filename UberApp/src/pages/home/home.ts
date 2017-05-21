import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapComponent } from '../../components/map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  entryComponents: [MapComponent]
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
