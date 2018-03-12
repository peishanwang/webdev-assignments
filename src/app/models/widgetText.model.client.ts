export class WidgetText {
  _id: String;
  widgetType: String;
  pageId: String;
  name: String;
  text: String;
  rows: Number;
  placeholder: String;
  formatted: Boolean;

  constructor(_id, widgetType, pageId, name, text, rows, placeholder, formatted) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.name = name;
    this.text = text;
    this.rows = rows;
    this.placeholder = placeholder;
    this.formatted = formatted;
  }
}
