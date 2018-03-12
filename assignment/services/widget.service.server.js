module.exports = function (app) {
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post('/api/page/:pid/widget', createWidget)
  app.get('/api/page/:pid/widget', findAllWidgetsForPage);
  app.get('/api/widget/:wgid', findWidgetById);
  app.put('/api/widget/:wgid', updateWidget);
  app.delete('/api/widget/:wgid', deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.put("/api/page/:pid/widget", reorderWidgets);

  var WIDGETS = [
    { _id: '345', widgetType: 'IMAGE', pageId: '321', name: 'w1', size: 0, text: '1From server', width: '100%', url: 'https://lh4.googleusercontent.com/-1MVk_VBS0bw/VulvcbZFN5I/AAAAAAAAcBg/sT4NgOD_0tw7xcfTCBaaGOp_UzuU7k21gCL0B/w921-h615-no/Grasslands%2BMountains.jpg'},
    { _id: '123', widgetType: 'HEADING', pageId: '321', name: 'w2', size: 2, text: '2GIZMODO From server', width: '', url: ''},
    { _id: '234', widgetType: 'HEADING', pageId: '321', name: 'w3', size: 4, text: '3Lorem ipsum From server', width: '', url: ''},
   // { _id: '345', widgetType: 'IMAGE', pageId: '321', name: 'w3', size: 0, text: 'From server', width: '100%', url: 'https://lh4.googleusercontent.com/-1MVk_VBS0bw/VulvcbZFN5I/AAAAAAAAcBg/sT4NgOD_0tw7xcfTCBaaGOp_UzuU7k21gCL0B/w921-h615-no/Grasslands%2BMountains.jpg'},
    { _id: '456', widgetType: 'HTML', pageId: '321', name: 'w4', size: 0, text: '<p>4Lorem ipsum From server</p>', width: '', url: ''},
    { _id: '567', widgetType: 'HEADING', pageId: '321', name: 'w5', size: 4, text: '5Lorem ipsum', width: '', url: ''},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', name: 'w6', size: 0, text: '6From server', width: '100%', url: 'https://www.youtube.com/watch?v=-u5gDCNwTiw'},
    { _id: '789', widgetType: 'HTML', pageId: '321', name: 'w7', size: 0, text: '<p>7Lorem ipsum From server</p>', width: '', url: ''},
  ];



  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
    //console.log(widgetId);
    var width         = req.body.width;
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    widget = getWidgetForWidId(widgetId);
    widget.url = '/assets/uploads/'+filename;

    var callbackUrl   = "http://localhost:4200/user/" + userId + "/website/"
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;

    res.redirect(callbackUrl);
  }


  function createWidget(req, res) {
    var pageId = req.params['pid'];
    var widget = req.body;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";
    //console.log(widget._id);
    WIDGETS.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage (req, res) {
    var pageId = req.params['pid'];
    var widgets = getWidgetsForPageId(pageId);
    res.json(widgets);
  }

  function findWidgetById(req, res) {
    //console.log(req.params['wgid']);
    //console.log(WIDGETS);
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
      //console.log(i);
      if(WIDGETS[i].pageId === pageId) {
        widgets.push(WIDGETS[i]);
      }
    }
    return widgets;
  }

  function getWidgetForWidId (widgetId) {
    for (var i = 0; i < WIDGETS.length; i++) {
      if (WIDGETS[i]._id === widgetId) {
        //console.log(WIDGETS[i]);
        return WIDGETS[i];
      }
    }
    //console.log("not found");
  }

  function reorderWidgets(req, res) {
    var pageId = req.params['pid'];
    var startIndex = req.query['start'];
    var endIndex = req.query['end'];
    //console.log(startIndex);
    //console.log(endIndex);
    if (startIndex < endIndex) {
      //console.log("call1");
      var widgets = getWidgetsForPageId(pageId);
      //console.log(widgets[2]);
      var startItem = Object.assign({}, widgets[startIndex]);
      for (var i = parseInt(startIndex); i < endIndex; i++) {
        //console.log(i);
        //console.log(widgets[2]);
        //console.log(i + 1);
        //console.log(widgets[i + 1]);
        widgets[i] = Object.assign({}, widgets[i + 1]);
        //console.log(widgets[i]);
      }
      widgets[endIndex] = Object.assign({}, startItem);
      var count = -1;
      for (var i = 0; i < WIDGETS.length; i++) {
        if (WIDGETS[i].pageId === pageId) {
          count++;
        }
        if (count >= startIndex && count <= endIndex) {
          WIDGETS[i] = widgets[count];
        }
      }
      //console.log(WIDGETS);
      //console.log(WIDGETS.length);
      //console.log(widgets);
    } else {
      //console.log("call2")
      var widgets = getWidgetsForPageId(pageId);
      var startItem = Object.assign({}, widgets[startIndex]);
      for (var i = parseInt(startIndex); i > endIndex; i--) {
        widgets[i] = Object.assign({}, widgets[i - 1]);
      }
      widgets[endIndex] = Object.assign({}, startItem);
      var count = -1;
      for (var i = 0; i < WIDGETS.length; i++) {
        if (WIDGETS[i].pageId === pageId) {
          count++;
        }
        if (count >= endIndex && count <= startIndex) {
          WIDGETS[i] = widgets[count];
        }
      }
    }
    return widgets;
  }
}
