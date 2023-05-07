document.addEventListener('DOMContentLoaded', function () {
  var listItems = document.querySelectorAll('.list');

  listItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var value = this.getAttribute('data-filter');
      var itemBoxes = document.querySelectorAll('.itembox');
      console.log('value', value)
      itemBoxes.forEach(function (box) {
        if (value === 'All' || box.classList.contains(value)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });


      // add active class on selected items
      listItems.forEach(function (item) {
        item.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});