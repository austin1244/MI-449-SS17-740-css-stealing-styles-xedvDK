(function ($) {
  function getRand (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  $(document).ready(function () {
    var classes = [
      'green', 'blue', 'yellow', 'purple', 'red'
    ]
    $('.search-name').find('span').each(function () {
      $(this).addClass(classes[getRand(0, classes.length)])
    })
  })
})(jQuery)
