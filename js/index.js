$(document).ready(function() {



  var spans = $('div[id^="content-"]').hide(),
      i = 0;

  (function cycle() {

      spans.eq(i).fadeIn(400)
                .delay(1200)
                .fadeOut(400, cycle);

      i = ++i % spans.length;

  })();


});


$(window).scroll(function() {
    if($(this).scrollTop() < 100) {
        $('.navbar').removeClass('opaque');
    } else {
      $('.navbar').addClass('opaque')
    }
});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43764219-2', 'auto');
  ga('send', 'pageview');
