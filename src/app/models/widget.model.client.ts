import {Optional} from "@angular/core";

export class Widget {
  _id: String;
  widgetType: String;
  pageId: String;
  size?: Number;
  text?: String;
  url?: String;
  width?: String;

  constructor(_id, widgetType, pageId, size?: Number, text = 'text', width = '100%', url = 'url') {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.url = url;
    this.width = width;
  }


}
