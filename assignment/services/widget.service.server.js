module.exports = function (app) {

  app.post('/api/page/:pid/widget', createWidget)
  app.get('/api/page/:pid/widget', findAllWidgetsForPage);
  app.get('/api/widget/:wgid', findWidgetById);
  app.put('/api/widget/:wgid', updateWidget);
  app.delete('/api/widget/:wgid', deleteWidget);

  var WIDGETS = [
    { _id: '123', type: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO From server', width: '', url: ''},
    { _id: '234', type: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum From server', width: '', url: ''},
    { _id: '345', type: 'IMAGE', pageId: '321', size: 0, text: 'From server', width: '100%', url: 'http://lorempixel.com/800/400/sports/'},
    { _id: '456', type: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum From server</p>', width: '', url: ''},
    { _id: '567', type: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', width: '', url: ''},
    { _id: '678', type: 'YOUTUBE', pageId: '321', size: 0, text: 'From server', width: '100%', url: 'https://www.youtube.com/embed/qdA32j7_U6U'},
    { _id: '789', type: 'HTML', pageId: '321', size: 0, text: '<p>Lorem ipsum From server</p>', width: '', url: ''},
  ];


  function createWidget(req, res) {
    var pageId = req.params['pid'];
    var widget = req.body;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";
    WIDGETS.push(widget);
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function findAllWidgetsForPage (req, res) {
    var pageId = req.params['pid'];
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params['wgid'];
    res.json(getWidgetForWidId(widgetId));
  }

  function updateWidget(req, res) {
    var widgetId = req.params['wgid'];
    var newWidget = req.body;
    for (var i = 0; i < WIDGETS.length; i++) {
      if(WIDGETS[i]._id === widgetId) {
        WIDGETS[i] = newWidget;
        var pageId = WIDGETS[i].pageId;
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['wgid'];
    for (var i = 0; i < WIDGETS.length; i++) {
      if(WIDGETS[i]._id === widgetId) {
        var pageId = WIDGETS[i].pageId;
        WIDGETS.splice(i, 1);
        var widgets = getWidgetsForPageId(pageId);
        res.json(widgets);
        return;
      }
    }
  }

  function getWidgetsForPageId (pageId) {
    var widgets = [];
    for (var i = 0; i < WIDGETS.length; i++) {
      if(WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  function getWidgetForWidId (widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId){
        return WIDGETS[i];
      }
    }

  }

}
