$(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    scrollBar: true
  });
  
  $(".main-menu").each(function() {
    $this = $(this);
    var $btns = $this.find("a");
    $this.on('click', 'a', function(event) {
      event.preventDefault();
      var idx = $btns.index(this);
      $.fn.fullpage.moveTo(idx+1);
    });
  });

  $(".more-btn").on("click", function(event) {
    event.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });
});