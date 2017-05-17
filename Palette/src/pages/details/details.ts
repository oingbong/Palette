import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
  // selector : details
  // 삭제 이유 : List에서 View 클릭 시 details이 두단계로 됨
  // (header 안 나오고 두번째 클릭시 나옴)
})
export class DetailsPage {
  constructor(public navCtrl: NavController){

  }
}
