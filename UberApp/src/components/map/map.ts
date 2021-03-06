import { Component, OnInit , Input} from '@angular/core';
import { PickupComponent } from '../pickup/pickup';

/**
 * Generated class for the Map component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'map',
  templateUrl: 'map.html',
  entryComponents: [PickupComponent]
})
export class MapComponent implements OnInit {

  @Input() isPickupRequested: boolean;

  public map;
  constructor() {

  }

  ngOnInit(){
    this.map = this.createMap();
  }

  createMap(location = new google.maps.LatLng(40.712784, -74.005941)){
    let mapOptions = {
      center : location,
      zoom : 15,
      mapTypeId : google.maps.MapTypeId.ROADMAP,
      disableDefaultUI : true
    }

    let mapEl = document.getElementById('map');
    let map = new google.maps.Map(mapEl, mapOptions);

    return map;
  }

}
