import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
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
  widgetId: String;
  curWidget: Widget;
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
        const widgetNew = new Widget
        ('HEADING', this.pageId, '',2, '','','');
        this.widgetService.createWidget(this.pageId, widgetNew).subscribe(
          (widget) => {
            this.widgetId = widget._id;
            //console.log(this.widgetId);
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
