//var test = 'office';
var types = [
  'news',
  'event',
  'media',
  'music'
];

// HASH LINK
if (window.location.hash) {
  var hash = window.location.hash.substring(1);

  console.log(hash);
  // Reset
  $('.grid-filter li').removeClass('active');
  $('.main-grid-tile').hide();

  // Check if the hash exists, else replace with 'all';
  if ($.inArray(hash, types) < 0) {
      $('.main-grid-tile').fadeIn(1000);
      $('.grid-filter li:first-child').addClass('active');
  }
  else {
    var filter = $(this).attr('data-filter');


    $('.grid-filter li a').each(function() {
      if ($(this).attr('data-filter') == hash) {
        $(this).parent('li').addClass('active');
      }
    });

    $('[data-type="'+hash+'"]').each(function() {
      $(this).fadeIn(1000);
    });
  }
  $grid.masonry();
}
