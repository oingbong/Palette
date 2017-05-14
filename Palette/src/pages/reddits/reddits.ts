import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddits.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    console.log('onInit ran...');
  }

}
