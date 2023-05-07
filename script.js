
var div = document.getElementById('learnmore');
var display = 1;
function hideShow  ()
{
  if(display == 1)
  {
    div.style.display = 'block';
    display = 0;
  }
  else{
    div.style.display = 'none';
    display = 1;
  }
}
  var div = document.getElementById('knowmore');
  var display = 1;
  function hideShow()
  {
    if(display == 1)
    {
      div.style.display = 'block';
      display = 0;
    }
    else{
      div.style.display = 'none';
      display = 1;
    }
    }
    $(document).ready(function(){
      $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value== 'all')
        {
          $('.itembox').show('1000');
        }
        else{
          $('.itembox').not('.'+value).hide('1000');
          $('.itembox').filter('.'+value).show('1000');
        }
      });

      // add active class on selected items
      $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
