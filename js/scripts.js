$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>meow</li>");
    $("ul#webpage").prepend("<li>bark</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#Dog").click(function() {
    $("ul#user").prepend("<li>bark</li>");
     $("ul#webpage").prepend("<li>meow</li>");
     $("ul#user").children("li").first().click(function() {
       $(this).remove();
     });
     $("ul#webpage").children("li").first().click(function() {
       $(this).remove();
     });
  });

  $("h3").click(function() {
    $(".showing").toggle();
  });

});
