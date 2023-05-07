
function hideShow(div) {
  if (div.style.display === 'block') {
    div.style.display = 'none'
  } else {
    div.style.display = 'block'
  }
}

$(document).ready(function () {
  $('.list').click(function () {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.itembox').show('1000');
    }
    else {
      $('.itembox').not('.' + value).hide('1000');
      $('.itembox').filter('.' + value).show('1000');
    }
  });

  // add active class on selected items
  $('.list').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});


