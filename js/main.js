

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
function getSubjects() {
  var session= window.localStorage.getItem("session");
    $.post("https://ticsiipcs.com.mx/api/index.php/getSubjects",{
      session: session
    },function (e) {
      var data = JSON.parse(e);
      $("#subjectsRow").html("");
    $(data).each(function (a,b) {
        $("#subjectsRow").append("<div class=\"col-xl-3 col-md-6 mb-4\">\n" +
            "        <div class=\"card border-left-primary shadow h-100 py-2\">\n" +
            "            <div class=\"card-body\">\n" +
            "                <div class=\"row no-gutters align-items-center\">\n" +
            "                    <div class=\"col mr-2\">\n" +
            "                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Profesor</div>\n" +
            "                        <div class=\"h5 mb-0 font-weight-bold text-gray-800\">"+b.name+"</div>\n" +
            "                    </div>\n" +
            "                    <div class=\"col-auto\">\n" +
            "                        <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>")
    })
    })
}