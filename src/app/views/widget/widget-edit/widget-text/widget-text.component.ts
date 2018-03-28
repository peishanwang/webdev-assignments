import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetText} from "../../../../models/widgetText.model.client";

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {
  pageId: String;
  userId: String;
  websiteId: String;
  widgetId: String;
  curWidget: WidgetText;
  isNew: Boolean;

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

  back() {
    if (this.isNew) {
      this.deleteWidget();
    }
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
      this.isNew = false;
      if (params['wgid'] === undefined) {
        this.isNew = true;
        const widgetNew = new WidgetText
        ( 'TEXT', this.pageId, '','', 1,'',false);
        this.widgetService.createWidget(this.pageId, widgetNew).subscribe(
          (widget) => {
            this.widgetId = widget._id;
            this.widgetService.findWidgetById(this.widgetId).subscribe(
              (widget : WidgetText) => {
                this.curWidget = widget;
              }
            );
          }
        );
      } else {
        this.widgetId = params['wgid'];
        this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget : WidgetText) => {
            this.curWidget = widget;
          }
        );
      }

    });
  }
}
