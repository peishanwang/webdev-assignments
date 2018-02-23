import { Component, OnInit } from '@angular/core';
import {GifService} from '../../../services/gif.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  gifLink = null;
  constructor(private gifService: GifService) { }

  ngOnInit() {
  }

  public searchGif(query: string): void {
    this.gifService.getUrlLink(query)
      .subscribe(data => {
        this.gifLink = data.data.image_original_url;
      })

  }

}
