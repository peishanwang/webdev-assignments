import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  widget: Widget;
  constructor(
    private widgetService: WidgetService,
    private activateRoute: ActivatedRoute) { }

  updateWidget(widget) {
    this.widgetService.updateWidget(this.widget._id, widget);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe((params: any) => {
      this.userId = params['uid'];
      this.widget = this.widgetService.findWidgetById(params['wgid']);
    });
  }

}
