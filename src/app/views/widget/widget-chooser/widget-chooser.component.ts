import { Component, OnInit } from '@angular/core';
import {GifService} from '../../../services/gif.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  gifLink = null;
  constructor() { }

  ngOnInit() {
  }


}
