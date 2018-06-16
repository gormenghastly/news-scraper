const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
//const db = require('./models');

router.get('/api/scrape', function(req, res) {
  request('https://undark.org/category/news-features/', function(
    err,
    response,
    html
  ) {
    let $ = cheerio.load(html);

    let articles = [];

    $('.entry-content').each(function(i, element) {
      var article = $(this)
        .children('a')
        .text();
      var link = $(this)
        .children('a')
        .attr('href');
      var title = $(this)
        .children('a')
        .attr('title');
      var image = $(this)
        .find('img')
        .attr('src');
      var author = $(this)
        .find('span')
        .children()
        .children()
        .eq(3)
        .text();

      console.log('title', title);
      console.log('link', link);
      console.log('image', image);
      console.log('author', author);

      let articleData = {
        title: title,
        link: link,
        image: image,
        author: author
      };

      articles.push(articleData);
    });
    res.send('scrape complete');
  });
});

router.get('/api/articles', function(req, res) {
  db.Article.find({})
    .then(function(dbArticle) {
      res.json(dbArticle);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
