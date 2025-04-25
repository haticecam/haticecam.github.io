$(function() {
  $( "#birthday" ).datepicker();
  

  var language = [
    "ActionScript",
    "AppleScript",
    "ASP",
    "Javascript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
  ];
  $("#language").autocomplete({
    source: language
  });
});


