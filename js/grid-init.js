$(document).ready(function() {
  var $grid = $('.main-grid').masonry({
    // disable initial layout
    initLayout: false,
    itemSelector: '.main-grid-tile'
  });
  // bind event
  $grid.masonry( 'on', 'layoutComplete', function() {
    console.log('layout is complete');
  });
  // trigger initial layout
  setTimeout(function() {
    console.log('test');
    $grid.masonry();
    $('.main-grid-tile').css('opacity', '1');
  }, 1500);
});
