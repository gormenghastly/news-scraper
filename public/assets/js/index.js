$(document).ready(function() {
  $('#new-button').on('click', function(event) {
    event.preventDefault();
  });

  initScrape();

  function initScrape() {
    $.get('/api/scrape').then(function(data) {});
  }
});
