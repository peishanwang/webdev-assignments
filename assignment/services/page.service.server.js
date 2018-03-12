module.exports = function (app) {


  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

  var PAGES = [
    { _id: "321", name: "Post 1 from server", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2 from server", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3 from server", websiteId: "456", title: "Lorem" }
  ];

  function createPage(req, res) {
    var websiteId = req.params['websiteId'];
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    PAGES.push(page);
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findAllPagesForWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    var pages = getPagesForWebsiteId(websiteId);
    res.json(pages);
  }

  function findPageById (req, res) {
    var pageId = req.params['pageId'];
    res.json(getPageForPageId(pageId));
  }

  function updatePage(req, res) {
    var pageId = req.params['pageId'];
    var newPage = req.body;
    for (var i = 0; i < PAGES.length; i++) {
      //console.log("'" + pageId + "'");
      //console.log("'" + PAGES[i]._id + "'");
      if (PAGES[i]._id === pageId) {
        PAGES[i] = newPage;
        var websiteId = PAGES[i].websiteId;
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        //console.log("up page");
        return;
      }
      //console.log("not found");
    }
  }

  function deletePage (req, res) {
    var pageId = req.params['pageId'];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        var websiteId = PAGES[i].websiteId;
        PAGES.splice(i, 1);
        var pages = getPagesForWebsiteId(websiteId);
        res.json(pages);
        return;
      }
    }
  }


  function getPageForPageId(pageId) {
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i]._id === pageId) {
        return PAGES[i];
      }
    }
  }

  function getPagesForWebsiteId(websiteId) {
    var pages = [];
    for (var i = 0; i < PAGES.length; i++) {
      if (PAGES[i].websiteId === websiteId) {
        pages.push(PAGES[i]);
      }
    }
    return pages;
  }

}
