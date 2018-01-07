import { Component, OnInit } from '@angular/core';
import {Location, Coordinate} from 'bee-watch-model/dist';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locations: Location[];

  constructor() { }

  ngOnInit() {
    this.locations = [
      new Location('Sternwarte', new Coordinate(600000, 200000), 'Die alte berner Sternwarte'),
      new Location('Sternwarze', new Coordinate(600001, 200001), 'Nicht ganz die alte berner Sternwarte')
    ];
  }
}
