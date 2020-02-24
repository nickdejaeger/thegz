$(document).ready(function() {
  $('.grid-filter li a').click(function() {
    var currentType = $(this).attr('data-filter');

    $('.grid-filter li').removeClass('active');
    $(this).parent('li').addClass('active');

    $('.main-grid-tile').hide();

    if (currentType === 'all') {
      $('.main-grid-tile').fadeIn(1000);
    }
    else if ( $('[data-type="'+currentType+'"]').length ) {
      $('[data-type="'+currentType+'"]').fadeIn();
    }
    else {
      $('[data-type="empty"]').fadeIn();
    }

    $grid.masonry();
  });
});

/* tenforce example */

// 2 columns GRID
$('.main-grid').masonry({
  itemSelector: '.main-grid-tile',
  transitionDuration: '.2s',
  horizontalOrder: false
});

$(window).on('click', function() {
  var $grid = $('.main-grid').masonry({
    itemSelector: '.main-grid-tile',
    transitionDuration: '.2s',
    horizontalOrder: false,
    initLayout: false
  });
  $grid.masonry('on', 'layoutComplete', function() {});
  $grid.masonry();
});
