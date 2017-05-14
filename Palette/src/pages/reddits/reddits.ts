import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddits.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any;

  constructor(public navCtrl: NavController, private redditService:RedditService) {

  }

  ngOnInit(){
    this.getPosts('sports',10);
  }

  getPosts(category, limit){
    this.redditService.getPosts(category, limit).subscribe(response => {
      console.log(response);
      this.items = response.data.children;
    });
  }
}
