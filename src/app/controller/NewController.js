const res = require("express/lib/response");

class NewsController{
    index(req, res){
        res.render('news');
    }
    //[GET] /news/:slug
    show(req, res){
        res.send('NEW DETAIL');
    }
}
module.exports = new NewsController();
