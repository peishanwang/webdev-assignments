import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  pageId: String;
  userId: String;
  websiteId: String;
  curWidget: Widget;

  constructor(
    private widgetService: WidgetService,
    private activateRoute: ActivatedRoute) { }

  updateWidget(widget) {
    this.widgetService.updateWidget(this.curWidget._id, widget);
  }

  deleteWidget(wgid) {
    this.widgetService.deleteWidget(wgid);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      if (params['wgid'] === undefined) {
        var widgetId = '';
        do {
          widgetId = Math.random() + "";
        } while (!this.widgetService.isValidId(widgetId));
        const widgetNew = new Widget(widgetId, 'HEADING', this.pageId, undefined, '','','');
        this.widgetService.createWidget(widgetId, widgetNew);
        const preWidget = this.widgetService.findWidgetById(widgetId);
        this.curWidget = Object.assign({}, preWidget);
      } else {
        const preWidget = this.widgetService.findWidgetById(params['wgid']);
        this.curWidget = Object.assign({}, preWidget);
      }

    });
  }

}
