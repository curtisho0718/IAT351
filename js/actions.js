'use strict';

console.log("actions.js JavaScript is online.");

/* Beginning of tabs and difficulty ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */
var table_shown = 1;
var semestercredits = document.getElementsByClassName("semester_credits");
var year1_fall_tab1_credits = 0;
var year1_spring_tab1_credits = 0;
var year1_summer_tab1_credits = 0;

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
    // if (table_shown == 1) {
    progressbar[n].value += 15;
    // }
}

function removeEasyCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value -= 15;
}

function addNormalCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value += 25;
}

function removeNormalCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value -= 25;
}

function addHardCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value += 40;
}

function removeHardCourse(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value -= 40;
}

function add233(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value += 50;
}

function remove233(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value -= 50;
}

function add438(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value += 75;
}

function remove438(n) {
    var progressbar = document.getElementsByTagName('progress');
    progressbar[n].value -= 75;
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
                year1_fall_tab1_credits += 3;
                addEasyCourse(0);
            } else if ($(ui.item).hasClass("normal")) {
                year1_fall_tab1_credits += 3;
                addNormalCourse(0);
            } else if ($(ui.item).hasClass("hard")) {
                year1_fall_tab1_credits += 4;
                addHardCourse(0);
            } else if ($(ui.item).hasClass("233")) {
                year1_fall_tab1_credits += 3;
                add233(0);
            } else if ($(ui.item).hasClass("438")) {
                year1_fall_tab1_credits += 4;
                add438(0);
            }

            fire();
            semestercredits[0].innerHTML = "Credits:" + year1_fall_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_fall_tab1_credits -= 3;
                removeEasyCourse(0);
            } else if ($(ui.item).hasClass("normal")) {
                year1_fall_tab1_credits -= 3;
                removeNormalCourse(0);
            } else if ($(ui.item).hasClass("hard")) {
                year1_fall_tab1_credits -= 4;
                removeHardCourse(0);
            } else if ($(ui.item).hasClass("233")) {
                year1_fall_tab1_credits -= 3;
                remove233(0);
            } else if ($(ui.item).hasClass("438")) {
                year1_fall_tab1_credits -= 4;
                remove438(0);
            }

            fire();
            semestercredits[0].innerHTML = "Credits:" + year1_fall_tab1_credits;
        }
    });

    // Year 1 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(1)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_spring_tab1_credits += 3;
                addEasyCourse(1);
            } else if ($(ui.item).hasClass("normal")) {
                year1_spring_tab1_credits += 3;
                addNormalCourse(1);
            } else if ($(ui.item).hasClass("hard")) {
                year1_spring_tab1_credits += 4;
                addHardCourse(1);
            } else if ($(ui.item).hasClass("233")) {
                year1_spring_tab1_credits += 3;
                add233(1);
            } else if ($(ui.item).hasClass("438")) {
                year1_spring_tab1_credits += 4;
                add438(1);
            }

            fire();
            semestercredits[1].innerHTML = "Credits:" + year1_spring_tab1_credits;
        }
    });

    $(".sortable2:eq(1)").sortable({
        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_spring_tab1_credits -= 3;
                removeEasyCourse(1);
            } else if ($(ui.item).hasClass("normal")) {
                year1_spring_tab1_credits -= 3;
                removeNormalCourse(1);
            } else if ($(ui.item).hasClass("hard")) {
                year1_spring_tab1_credits -= 4;
                removeHardCourse(1);
            } else if ($(ui.item).hasClass("233")) {
                year1_spring_tab1_credits -= 3;
                remove233(1);
            } else if ($(ui.item).hasClass("438")) {
                year1_spring_tab1_credits -= 4;
                remove438(1);
            }

            fire();
            semestercredits[1].innerHTML = "Credits:" + year1_spring_tab1_credits;
        }
    });

    // Year 1 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(2)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_summer_tab1_credits += 3;
                addEasyCourse(2);
            } else if ($(ui.item).hasClass("normal")) {
                year1_summer_tab1_credits += 3;
                addNormalCourse(2);
            } else if ($(ui.item).hasClass("hard")) {
                year1_summer_tab1_credits += 3;
                addHardCourse(2);
            } else if ($(ui.item).hasClass("233")) {
                year1_summer_tab1_credits += 3;
                add233(2);
            } else if ($(ui.item).hasClass("438")) {
                year1_summer_tab1_credits += 3;
                add438(2);
            }

            fire();
            semestercredits[2].innerHTML = "Credits:" + year1_summer_tab1_credits;
        }
    });

    $(".sortable2:eq(2)").sortable({
        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_summer_tab1_credits -= 3;
                removeEasyCourse(2);
            } else if ($(ui.item).hasClass("normal")) {
                year1_summer_tab1_credits -= 3;
                removeNormalCourse(2);
            } else if ($(ui.item).hasClass("hard")) {
                year1_summer_tab1_credits -= 4;
                removeHardCourse(2);
            } else if ($(ui.item).hasClass("233")) {
                year1_summer_tab1_credits -= 3;
                remove233(2);
            } else if ($(ui.item).hasClass("438")) {
                year1_summer_tab1_credits -= 4;
                remove438(2);
            }

            fire();
            semestercredits[2].innerHTML = "Credits:" + year1_summer_tab1_credits;
        }
    });

});

  /* End of drag and drop ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */