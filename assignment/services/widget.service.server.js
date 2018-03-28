module.exports = function (app) {
  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.post('/api/page/:pageId/widget', createWidget)
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.put("/api/page/:pageId/widget", reorderWidgets);
  var widgetModel = require("../model/widget/widget.model.server");

/*  var WIDGETS = [
    { _id: '345', widgetType: 'IMAGE', pageId: '321', name: 'w1', size: 0, text: '1From server', width: '100%', url: 'https://lh4.googleusercontent.com/-1MVk_VBS0bw/VulvcbZFN5I/AAAAAAAAcBg/sT4NgOD_0tw7xcfTCBaaGOp_UzuU7k21gCL0B/w921-h615-no/Grasslands%2BMountains.jpg'},
    { _id: '123', widgetType: 'HEADING', pageId: '321', name: 'w2', size: 2, text: '2GIZMODO From server', width: '', url: ''},
    { _id: '234', widgetType: 'HEADING', pageId: '321', name: 'w3', size: 4, text: '3Lorem ipsum From server', width: '', url: ''},
    { _id: '456', widgetType: 'HTML', pageId: '321', name: 'w4', size: 0, text: '<p>4Lorem ipsum From server</p>', width: '', url: ''},
    { _id: '567', widgetType: 'HEADING', pageId: '321', name: 'w5', size: 4, text: '5Lorem ipsum', width: '', url: ''},
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', name: 'w6', size: 0, text: '6From server', width: '100%', url: 'https://www.youtube.com/watch?v=-u5gDCNwTiw'},
    { _id: '789', widgetType: 'HTML', pageId: '321', name: 'w7', size: 0, text: '<p>7Lorem ipsum From server</p>', width: '', url: ''},
  ];*/

  function uploadImage(req, res) {
    var widgetId      = req.body.widgetId;
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
    widget.url = 'uploads/'+filename;

    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (status) {
          res.send(status);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });

    var callbackUrl   = "/user/" + userId + "/website/"
      + websiteId + '/page/' + pageId + '/widget/' + widgetId;

    res.redirect(callbackUrl);
  }

  function reorderWidgets(req,res) {
    var pageId = req.params.pageId;
    var startIndex = parseInt(req.query.start);
    var endIndex = parseInt(req.query.end);
    widgetModel
      .reorderWidgets(pageId, startIndex, endIndex)
      .then(function (status) {
        res.send(status);
      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }

  function createWidget (req,res) {
    var pageId = req.params.pageId;
    var widget = req.body;
    widgetModel
      .createWidget(pageId, widget)
      .then(function (widget) {
        res.json(widget);

      }, function (err) {
        res.sendStatus(400).send(err);
      });
  }


  function findAllWidgetsForPage (req,res) {
    var pageId = req.params.pageId;
    widgetModel
      .findAllWidgetsForPage(pageId)
      .then(function (widgets) {
          res.json(widgets);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function findWidgetById (req,res) {
    var widgetId  = req.params.widgetId;
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
          res.json(widget);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function updateWidget (req,res) {
    var widgetId  = req.params.widgetId;
    var widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (status) {
          res.send(status);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

  function deleteWidget (req,res) {
    var widgetId  = req.params.widgetId;
    widgetModel
      .deleteWidget(widgetId)
      .then (function (status) {
          res.send(status);
        },
        function (err) {
          res.sendStatus(404).send(err);
        });
  }

};
