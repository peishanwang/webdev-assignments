import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  pageId: String;
  websiteId: String;
  widget: Widget;
  constructor(
    private widgetService: WidgetService,
    private activateRoute: ActivatedRoute ){}

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.websiteId = params['wid'];
      this.widgetService.findWidgetById(params['wgid']).subscribe(
        (widget : Widget) => {
          this.widget = widget;
      }
      );
    });
  }

}
