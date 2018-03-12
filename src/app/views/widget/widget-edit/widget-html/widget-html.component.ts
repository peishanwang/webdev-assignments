import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WidgetService} from "../../../../services/widget.service.client";
import {Widget} from "../../../../models/widget.model.client";

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {
  pageId: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  curWidget: Widget;

  constructor(
    private widgetService: WidgetService,
    private activateRoute: ActivatedRoute,
    private router: Router) { }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.curWidget)
      .subscribe(
        (data: any) => this.router
          .navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );

  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => this.router
          .navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.websiteId = params['wid'];
      this.pageId = params['pid'];
      if (params['wgid'] === undefined) {
        const widgetNew = new Widget
        (undefined, 'HTML', this.pageId, '',2, '','','');
        this.widgetService.createWidget(this.pageId, widgetNew).subscribe(
          (widget: Widget) => {
            this.widgetId = widget._id;
            this.widgetService.findWidgetById(this.widgetId).subscribe(
              (widget : Widget) => {
                this.curWidget = widget;
              }
            );
          }
        );
      } else {
        this.widgetId = params['wgid'];
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget : Widget) => {
            this.curWidget = widget;
          }
        );
      }

    });
  }
}
