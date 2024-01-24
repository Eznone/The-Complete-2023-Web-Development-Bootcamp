/* Manipulating Styles */
$("h1").addClass("big-title margin-50")


/* Manipulating text */
$("button").text("Don't click Me");


/* Manipulating Attributes */
$("a").attr("href", "https://www.yahoo.com");


/* Adding Event Listeners */
$("h1").click(function() {
  $("h1").css("color", "orange"); /* Use .hide() or .show() or .toggle() */
});

$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
  $("#Access").text(event.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "green");
});


/* Adding and removing HTML elements */
$("h1").before("<button>Outside h1</button>");
$("h1").prepend("<button>Inside h1</button>");
$("h1").after("<button>Outside h1</button>");
$("h1").append("<button>Inside h1</button>");


/* Website Animations */
$("h2").click(function() {
  $("h2").slideUp().slideDown().animate({opacity: 0.5})
});
