

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
      });

    } else if (leftPos < position) {
      $("#topbar").animate({scrollLeft: leftPos + 100}, 400, function () {
        lasPosition=$("#" + option).offset().left;
        $("#" + option).addClass("selected");
      });
    }
    else{
      $("#" + option).addClass("selected");

    }
  } else {
    $("#" + option).addClass("selected");
  }




}
