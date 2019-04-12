

function start() {
  var value = window.localStorage.getItem("session");
  if(value==null||value=="undefined"||value=="")
  {
    $.get("login.html",function (e) {
      $("#main").html(e);
    })
  }
  else{
    $.get("main.html",function (e) {
      $("#main").html(e);

      $.get("./Views/Partial/AppName.html",function (e) {
        $("#appname").html(e);

      });

      $.get("./Views/Partial/TopBar.html",function (e) {
        $("#topbar").html(e);

      });
    })
  }
}

function login() {

}
function login(user,password) {


}
$(document).ready(function() {
  start();
});
var lasPosition;
function selectOption(option) {
  $("#topbar div").removeClass("selected");
  var position = $("#" + option).offset().left;
  var leftPos = $("#topbar").scrollLeft();
  if(lasPosition!=position)
  {
    if (leftPos > position) {
      $("#topbar").animate({scrollLeft: leftPos - 100}, 400, function () {
        lasPosition=$("#" + option).offset().left;
        $("#" + option).addClass("selected");
        showView(option);
      });

    } else if (leftPos < position) {
      $("#topbar").animate({scrollLeft: leftPos + 100}, 400, function () {
        lasPosition=$("#" + option).offset().left;
        $("#" + option).addClass("selected");
          showView(option);
      });
    }
    else{
      $("#" + option).addClass("selected");
        showView(option);

    }
  } else {
    $("#" + option).addClass("selected");
      showView(option);
  }
}
function showView(option) {
  switch (option){
      case "subjectsOption":
          $.get("./Views/Subjects.html",function (e) {
              $("#main").html(e);

          });
          break;
      case "gradesOption":
          $.get("./Views/Grades.html",function (e) {
              $("#main").html(e);
          });
          break;
      case "booksOption":
          $.get("./Views/Books.html",function (e) {
              $("#main").html(e);
          });
          break;
      case "calendarOption":
          $.get("./Views/Calendar.html",function (e) {
              $("#main").html(e);
          });
          break;
  }


}
