'use strict';

console.log("actions.js JavaScript is online.");

/* Beginning of tabs and difficulty ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */
var table_shown = 1;
var credits = 0;

window.onload = function () {
    $("#schedule1").show();
    $("#schedule2").hide();
    table_shown = 1;
}

$("#tab_button1").click(function () {
    $("#schedule1").show();
    $("#schedule2").hide();
    table_shown = 1;
});

$("#tab_button2").click(function () {
    $("#schedule1").hide();
    $("#schedule2").show();
    table_shown = 2;
});

function addEasyCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    // if (table_shown == 1) {
    progressbar[n].value += 15;
    // }
    credits += 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function removeEasyCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value -= 15;
    credits -= 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function addNormalCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value += 25;
    credits += 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function removeNormalCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value -= 25;
    credits -= 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function addHardCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value += 40;
    credits += 4;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function removeHardCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value -= 40;
    credits -= 4;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function add233(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value += 50;
    credits += 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function remove233(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value -= 50;
    credits -= 3;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function add438(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value += 75;
    credits += 4;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function remove438(n) {
    var progressbar = document.getElementsByTagName('progress');
    var semestercredits = document.getElementsByClassName("semester_credits");
    progressbar[n].value -= 75;
    credits -= 4;
    semestercredits[n].innerHTML = "Credits:" + credits;
}

function fire() {
    var progressbar = document.getElementsByTagName('progress');
    for (var i = 0; i < progressbar.length; i++) {
        if (progressbar[i].value < 61) {
            $(progressbar[i]).removeClass("difficulty_bar_red");
            $(progressbar[i]).removeClass("difficulty_bar_yellow");
            $(progressbar[i]).addClass("difficulty_bar_green");
        } else if (progressbar[i].value > 75) {
            $(progressbar[i]).removeClass("difficulty_bar_yellow");
            $(progressbar[i]).removeClass("difficulty_bar_green");
            $(progressbar[i]).addClass("difficulty_bar_red");
        } else {
            $(progressbar[i]).removeClass("difficulty_bar_green");
            $(progressbar[i]).removeClass("difficulty_bar_red");
            $(progressbar[i]).addClass("difficulty_bar_yellow");
        }
    }
}
/* End of tabs and difficulty ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */

/* Beginning of drag and drop ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */
// function myFunction() {
//     var x = $(".num").length - 1;
//     document.getElementById("demo").innerHTML = x;
// }


$(function () {
    $("li").hide(0).slideDown(1100);
    $("ul").sortable();
    $("ul").disableSelection();

    //    $("li").draggable({containment: 'document', revert: true, snap: '.semester', scroll: false, helper: "clone",
    //    	start: function() {
    //    		var content = $(this).text();
    //   		}
    // });

    //    $(".semester").droppable({hoverClass: 'bgrd', accept: '.item', //Jquery 'hover' instead of CSS
    //        drop: function() {
    //        	$(this).addClass("num");
    //        	$("td").append(content);

    //        	$(".num").length;
    //        }
    //    });

});

$(function () {
    $(".sortable1, .sortable2").sortable({
        scroll: false,
        connectWith: ".connectedSortable"
    }).disableSelection();


    // Year 1 Fall Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(0)").sortable({

        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                addEasyCourse(0);
            } else if ($(ui.item).hasClass("normal")) {
                addNormalCourse(0);
            } else if ($(ui.item).hasClass("hard")) {
                addHardCourse(0);
            } else if ($(ui.item).hasClass("233")) {
                add233(0);
            } else if ($(ui.item).hasClass("438")) {
                add438(0);
            }

            fire();
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                removeEasyCourse(0);
            } else if ($(ui.item).hasClass("normal")) {
                removeNormalCourse(0);
            } else if ($(ui.item).hasClass("hard")) {
                removeHardCourse(0);
            } else if ($(ui.item).hasClass("233")) {
                remove233(0);
            } else if ($(ui.item).hasClass("438")) {
                remove438(0);
            }

            fire();
        }
    });

    // Year 1 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(1)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                addEasyCourse(1);
            } else if ($(ui.item).hasClass("normal")) {
                addNormalCourse(1);
            } else if ($(ui.item).hasClass("hard")) {
                addHardCourse(1);
            } else if ($(ui.item).hasClass("233")) {
                add233(1);
            } else if ($(ui.item).hasClass("438")) {
                add438(1);
            }

            fire();
        }
    });

    $(".sortable2:eq(1)").sortable({
        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                removeEasyCourse(1);
            } else if ($(ui.item).hasClass("normal")) {
                removeNormalCourse(1);
            } else if ($(ui.item).hasClass("hard")) {
                removeHardCourse(1);
            } else if ($(ui.item).hasClass("233")) {
                remove233(1);
            } else if ($(ui.item).hasClass("438")) {
                remove438(1);
            }

            fire();
        }
    });

    // Year 1 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(2)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                addEasyCourse(2);
            } else if ($(ui.item).hasClass("normal")) {
                addNormalCourse(2);
            } else if ($(ui.item).hasClass("hard")) {
                addHardCourse(2);
            } else if ($(ui.item).hasClass("233")) {
                add233(2);
            } else if ($(ui.item).hasClass("438")) {
                add438(2);
            }

            fire();
        }
    });

    $(".sortable2:eq(2)").sortable({
        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                removeEasyCourse(2);
            } else if ($(ui.item).hasClass("normal")) {
                removeNormalCourse(2);
            } else if ($(ui.item).hasClass("hard")) {
                removeHardCourse(2);
            } else if ($(ui.item).hasClass("233")) {
                remove233(2);
            } else if ($(ui.item).hasClass("438")) {
                remove438(2);
            }

            fire();
        }
    });

});

  /* End of drag and drop ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */