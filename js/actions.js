'use strict';

console.log("actions.js JavaScript is online.");

/* Beginning of tabs and difficulty ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */
var table_shown = 1;
var semestercredits = document.getElementsByClassName("semester_credits");
var cumulativecredits = document.getElementById("cumulative_credits");
var year1_fall_tab1_credits = 0;
var year1_spring_tab1_credits = 0;
var year1_summer_tab1_credits = 0;

var year2_fall_tab1_credits = 0;
var year2_spring_tab1_credits = 0;
var year2_summer_tab1_credits = 0;

var year3_fall_tab1_credits = 0;
var year3_spring_tab1_credits = 0;
var year3_summer_tab1_credits = 0;

var year4_fall_tab1_credits = 0;
var year4_spring_tab1_credits = 0;
var year4_summer_tab1_credits = 0;

window.onload = function () {
    $("#schedule1").show();
    $("#schedule2").hide();
    table_shown = 1;

    $('#iat102, #iat235, #iat339').mouseenter(function(){
        console.log("RABBIT!");
        $("#iat102, #iat235, #iat339").css("border-style", "solid");
        $("#iat102, #iat235, #iat339").css("border-color", "#ffe87a");
    });

    $('#iat102, #iat235, #iat339').mouseleave(function(){
        console.log("RABBIT!");
        $("#iat102, #iat235, #iat339").css("border-style", "none");
        $("#iat102, #iat235, #iat339").css("border-color", "#3b3b3b");
    });
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

    cumulativecredits.innerHTML = "<strong> Cumulative Credits: </strong>" +
        (year1_fall_tab1_credits + year1_spring_tab1_credits + year1_summer_tab1_credits
            + year2_fall_tab1_credits + year2_spring_tab1_credits + year2_summer_tab1_credits
            + year3_fall_tab1_credits + year3_spring_tab1_credits + year3_summer_tab1_credits
            + year4_fall_tab1_credits + year4_spring_tab1_credits + year4_summer_tab1_credits)
    // + "/120"; 
}

function preventEasyCourse(n) {
    removeEasyCourse(n);
    $(".sortable1").sortable("cancel");
}
/* End of tabs and difficulty ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */


// Pop-up 
// When the user clicks on <div>, open the popup
function popUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
// 


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
        connectWith: ".connectedSortable",
        placeholder: "ui-state-highlight"
    }).disableSelection();

    // Year 1 Fall Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(0)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_fall_tab1_credits += 3;
                addEasyCourse(0);

                if (year1_fall_tab1_credits >= 16) {
                    preventEasyCourse(0);
                    year1_fall_tab1_credits -= 3;
                }
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
            semestercredits[0].innerHTML = "Credits: " + year1_fall_tab1_credits;
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
            semestercredits[0].innerHTML = "Credits: " + year1_fall_tab1_credits;
        }
    });

    // Year 1 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(1)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_spring_tab1_credits += 3;
                addEasyCourse(1);

                if (year1_spring_tab1_credits >= 16) {
                    preventEasyCourse(1);
                    year1_spring_tab1_credits -= 3;
                }
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
            semestercredits[1].innerHTML = "Credits: " + year1_spring_tab1_credits;
        },

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
            semestercredits[1].innerHTML = "Credits: " + year1_spring_tab1_credits;
        }
    });

    // Year 1 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(2)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year1_summer_tab1_credits += 3;
                addEasyCourse(2);

                if (year1_summer_tab1_credits >= 16) {
                    preventEasyCourse(2);
                    year1_summer_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year1_summer_tab1_credits += 3;
                addNormalCourse(2);
            } else if ($(ui.item).hasClass("hard")) {
                year1_summer_tab1_credits += 4;
                addHardCourse(2);
            } else if ($(ui.item).hasClass("233")) {
                year1_summer_tab1_credits += 3;
                add233(2);
            } else if ($(ui.item).hasClass("438")) {
                year1_summer_tab1_credits += 4;
                add438(2);
            }

            fire();
            semestercredits[2].innerHTML = "Credits: " + year1_summer_tab1_credits;
        },

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
            semestercredits[2].innerHTML = "Credits: " + year1_summer_tab1_credits;
        }
    });

    // Year 2 Fall Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(3)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_fall_tab1_credits += 3;
                addEasyCourse(3);

                if (year2_fall_tab1_credits >= 16) {
                    preventEasyCourse(3);
                    year2_fall_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year2_fall_tab1_credits += 3;
                addNormalCourse(3);
            } else if ($(ui.item).hasClass("hard")) {
                year2_fall_tab1_credits += 4;
                addHardCourse(3);
            } else if ($(ui.item).hasClass("233")) {
                year2_fall_tab1_credits += 3;
                add233(3);
            } else if ($(ui.item).hasClass("438")) {
                year2_fall_tab1_credits += 4;
                add438(3);
            }

            fire();
            semestercredits[3].innerHTML = "Credits: " + year2_fall_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_fall_tab1_credits -= 3;
                removeEasyCourse(3);
            } else if ($(ui.item).hasClass("normal")) {
                year2_fall_tab1_credits -= 3;
                removeNormalCourse(3);
            } else if ($(ui.item).hasClass("hard")) {
                year2_fall_tab1_credits -= 4;
                removeHardCourse(3);
            } else if ($(ui.item).hasClass("233")) {
                year2_fall_tab1_credits -= 3;
                remove233(3);
            } else if ($(ui.item).hasClass("438")) {
                year2_fall_tab1_credits -= 4;
                remove438(3);
            }

            fire();
            semestercredits[3].innerHTML = "Credits: " + year2_fall_tab1_credits;
        }
    });

    // Year 2 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(4)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_spring_tab1_credits += 3;
                addEasyCourse(4);

                if (year2_spring_tab1_credits >= 16) {
                    preventEasyCourse(4);
                    year2_spring_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year2_spring_tab1_credits += 3;
                addNormalCourse(4);
            } else if ($(ui.item).hasClass("hard")) {
                year2_spring_tab1_credits += 4;
                addHardCourse(4);
            } else if ($(ui.item).hasClass("233")) {
                year2_spring_tab1_credits += 3;
                add233(4);
            } else if ($(ui.item).hasClass("438")) {
                year2_spring_tab1_credits += 4;
                add438(4);
            }

            fire();
            semestercredits[4].innerHTML = "Credits: " + year2_spring_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_spring_tab1_credits -= 3;
                removeEasyCourse(4);
            } else if ($(ui.item).hasClass("normal")) {
                year2_spring_tab1_credits -= 3;
                removeNormalCourse(4);
            } else if ($(ui.item).hasClass("hard")) {
                year2_spring_tab1_credits -= 4;
                removeHardCourse(4);
            } else if ($(ui.item).hasClass("233")) {
                year2_spring_tab1_credits -= 3;
                remove233(4);
            } else if ($(ui.item).hasClass("438")) {
                year2_spring_tab1_credits -= 4;
                remove438(4);
            }

            fire();
            semestercredits[4].innerHTML = "Credits: " + year2_spring_tab1_credits;
        }
    });

    // Year 2 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(5)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_summer_tab1_credits += 3;
                addEasyCourse(5);

                if (year2_summer_tab1_credits >= 16) {
                    preventEasyCourse(5);
                    year2_summer_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year2_summer_tab1_credits += 3;
                addNormalCourse(5);
            } else if ($(ui.item).hasClass("hard")) {
                year2_summer_tab1_credits += 4;
                addHardCourse(5);
            } else if ($(ui.item).hasClass("233")) {
                year2_summer_tab1_credits += 3;
                add233(5);
            } else if ($(ui.item).hasClass("438")) {
                year2_summer_tab1_credits += 4;
                add438(5);
            }

            fire();
            semestercredits[5].innerHTML = "Credits: " + year2_summer_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year2_summer_tab1_credits -= 3;
                removeEasyCourse(5);
            } else if ($(ui.item).hasClass("normal")) {
                year2_summer_tab1_credits -= 3;
                removeNormalCourse(5);
            } else if ($(ui.item).hasClass("hard")) {
                year2_summer_tab1_credits -= 4;
                removeHardCourse(5);
            } else if ($(ui.item).hasClass("233")) {
                year2_summer_tab1_credits -= 3;
                remove233(5);
            } else if ($(ui.item).hasClass("438")) {
                year2_summer_tab1_credits -= 4;
                remove438(5);
            }

            fire();
            semestercredits[5].innerHTML = "Credits: " + year2_summer_tab1_credits;
        }
    });

    // Year 3 Fall Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(6)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_fall_tab1_credits += 3;
                addEasyCourse(6);

                if (year3_fall_tab1_credits >= 16) {
                    preventEasyCourse(6);
                    year3_fall_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year3_fall_tab1_credits += 3;
                addNormalCourse(6);
            } else if ($(ui.item).hasClass("hard")) {
                year3_fall_tab1_credits += 4;
                addHardCourse(6);
            } else if ($(ui.item).hasClass("233")) {
                year3_fall_tab1_credits += 3;
                add233(6);
            } else if ($(ui.item).hasClass("438")) {
                year3_fall_tab1_credits += 4;
                add438(6);
            }

            fire();
            semestercredits[6].innerHTML = "Credits: " + year3_fall_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_fall_tab1_credits -= 3;
                removeEasyCourse(6);
            } else if ($(ui.item).hasClass("normal")) {
                year3_fall_tab1_credits -= 3;
                removeNormalCourse(6);
            } else if ($(ui.item).hasClass("hard")) {
                year3_fall_tab1_credits -= 4;
                removeHardCourse(6);
            } else if ($(ui.item).hasClass("233")) {
                year3_fall_tab1_credits -= 3;
                remove233(6);
            } else if ($(ui.item).hasClass("438")) {
                year3_fall_tab1_credits -= 4;
                remove438(6);
            }

            fire();
            semestercredits[6].innerHTML = "Credits: " + year3_fall_tab1_credits;
        }
    });

    // Year 3 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(7)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_spring_tab1_credits += 3;
                addEasyCourse(7);

                if (year3_spring_tab1_credits >= 16) {
                    preventEasyCourse(7);
                    year3_spring_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year3_spring_tab1_credits += 3;
                addNormalCourse(7);
            } else if ($(ui.item).hasClass("hard")) {
                year3_spring_tab1_credits += 4;
                addHardCourse(7);
            } else if ($(ui.item).hasClass("233")) {
                year3_spring_tab1_credits += 3;
                add233(7);
            } else if ($(ui.item).hasClass("438")) {
                year3_spring_tab1_credits += 4;
                add438(7);
            }

            fire();
            semestercredits[7].innerHTML = "Credits: " + year3_spring_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_spring_tab1_credits -= 3;
                removeEasyCourse(7);
            } else if ($(ui.item).hasClass("normal")) {
                year3_spring_tab1_credits -= 3;
                removeNormalCourse(7);
            } else if ($(ui.item).hasClass("hard")) {
                year3_spring_tab1_credits -= 4;
                removeHardCourse(7);
            } else if ($(ui.item).hasClass("233")) {
                year3_spring_tab1_credits -= 3;
                remove233(7);
            } else if ($(ui.item).hasClass("438")) {
                year3_spring_tab1_credits -= 4;
                remove438(7);
            }

            fire();
            semestercredits[7].innerHTML = "Credits: " + year3_spring_tab1_credits;
        }
    });

    // Year 3 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(8)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_summer_tab1_credits += 3;
                addEasyCourse(8);

                if (year3_summer_tab1_credits >= 16) {
                    preventEasyCourse(8);
                    year3_summer_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year3_summer_tab1_credits += 3;
                addNormalCourse(8);
            } else if ($(ui.item).hasClass("hard")) {
                year3_summer_tab1_credits += 4;
                addHardCourse(8);
            } else if ($(ui.item).hasClass("233")) {
                year3_summer_tab1_credits += 3;
                add233(8);
            } else if ($(ui.item).hasClass("438")) {
                year3_summer_tab1_credits += 4;
                add438(8);
            }

            fire();
            semestercredits[8].innerHTML = "Credits: " + year3_summer_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year3_summer_tab1_credits -= 3;
                removeEasyCourse(8);
            } else if ($(ui.item).hasClass("normal")) {
                year3_summer_tab1_credits -= 3;
                removeNormalCourse(8);
            } else if ($(ui.item).hasClass("hard")) {
                year3_summer_tab1_credits -= 4;
                removeHardCourse(8);
            } else if ($(ui.item).hasClass("233")) {
                year3_summer_tab1_credits -= 3;
                remove233(8);
            } else if ($(ui.item).hasClass("438")) {
                year3_summer_tab1_credits -= 4;
                remove438(8);
            }

            fire();
            semestercredits[8].innerHTML = "Credits: " + year3_summer_tab1_credits;
        }
    });

    // Year 4 Fall Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(9)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_fall_tab1_credits += 3;
                addEasyCourse(9);

                if (year4_fall_tab1_credits >= 16) {
                    preventEasyCourse(9);
                    year4_fall_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year4_fall_tab1_credits += 3;
                addNormalCourse(9);
            } else if ($(ui.item).hasClass("hard")) {
                year4_fall_tab1_credits += 4;
                addHardCourse(9);
            } else if ($(ui.item).hasClass("233")) {
                year4_fall_tab1_credits += 3;
                add233(9);
            } else if ($(ui.item).hasClass("438")) {
                year4_fall_tab1_credits += 4;
                add438(9);
            }

            fire();
            semestercredits[9].innerHTML = "Credits: " + year4_fall_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_fall_tab1_credits -= 3;
                removeEasyCourse(9);
            } else if ($(ui.item).hasClass("normal")) {
                year4_fall_tab1_credits -= 3;
                removeNormalCourse(9);
            } else if ($(ui.item).hasClass("hard")) {
                year4_fall_tab1_credits -= 4;
                removeHardCourse(9);
            } else if ($(ui.item).hasClass("233")) {
                year4_fall_tab1_credits -= 3;
                remove233(9);
            } else if ($(ui.item).hasClass("438")) {
                year4_fall_tab1_credits -= 4;
                remove438(9);
            }

            fire();
            semestercredits[9].innerHTML = "Credits: " + year4_fall_tab1_credits;
        }
    });

    // Year 4 Spring Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(10)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_spring_tab1_credits += 3;
                addEasyCourse(10);

                if (year4_spring_tab1_credits >= 16) {
                    preventEasyCourse(10);
                    year4_spring_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year4_spring_tab1_credits += 3;
                addNormalCourse(10);
            } else if ($(ui.item).hasClass("hard")) {
                year4_spring_tab1_credits += 4;
                addHardCourse(10);
            } else if ($(ui.item).hasClass("233")) {
                year4_spring_tab1_credits += 3;
                add233(10);
            } else if ($(ui.item).hasClass("438")) {
                year4_spring_tab1_credits += 4;
                add438(10);
            }

            fire();
            semestercredits[10].innerHTML = "Credits: " + year4_spring_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_spring_tab1_credits -= 3;
                removeEasyCourse(10);
            } else if ($(ui.item).hasClass("normal")) {
                year4_spring_tab1_credits -= 3;
                removeNormalCourse(10);
            } else if ($(ui.item).hasClass("hard")) {
                year4_spring_tab1_credits -= 4;
                removeHardCourse(10);
            } else if ($(ui.item).hasClass("233")) {
                year4_spring_tab1_credits -= 3;
                remove233(10);
            } else if ($(ui.item).hasClass("438")) {
                year4_spring_tab1_credits -= 4;
                remove438(10);
            }

            fire();
            semestercredits[10].innerHTML = "Credits: " + year4_spring_tab1_credits;
        }
    });

    // Year 4 Summer Tab 1 ――――――――――――――――――――――――――――――――――――――――――――――
    $(".sortable2:eq(11)").sortable({
        receive: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_summer_tab1_credits += 3;
                addEasyCourse(11);

                if (year4_summer_tab1_credits >= 16) {
                    preventEasyCourse(11);
                    year4_summer_tab1_credits -= 3;
                }
            } else if ($(ui.item).hasClass("normal")) {
                year4_summer_tab1_credits += 3;
                addNormalCourse(11);
            } else if ($(ui.item).hasClass("hard")) {
                year4_summer_tab1_credits += 4;
                addHardCourse(11);
            } else if ($(ui.item).hasClass("233")) {
                year4_summer_tab1_credits += 3;
                add233(11);
            } else if ($(ui.item).hasClass("438")) {
                year4_summer_tab1_credits += 4;
                add438(11);
            }

            fire();
            semestercredits[11].innerHTML = "Credits: " + year4_summer_tab1_credits;
        },

        remove: function (event, ui) {
            if ($(ui.item).hasClass("easy")) {
                year4_summer_tab1_credits -= 3;
                removeEasyCourse(11);
            } else if ($(ui.item).hasClass("normal")) {
                year4_summer_tab1_credits -= 3;
                removeNormalCourse(11);
            } else if ($(ui.item).hasClass("hard")) {
                year4_summer_tab1_credits -= 4;
                removeHardCourse(11);
            } else if ($(ui.item).hasClass("233")) {
                year4_summer_tab1_credits -= 3;
                remove233(11);
            } else if ($(ui.item).hasClass("438")) {
                year4_summer_tab1_credits -= 4;
                remove438(11);
            }

            fire();
            semestercredits[11].innerHTML = "Credits: " + year4_summer_tab1_credits;
        }
    });
});
  /* End of drag and drop ――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― */