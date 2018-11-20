'use strict';

console.log("tabs_and_difficulty.js JavaScript is online.");

window.onload = function () {
    $("#schedule1").show();
    $("#schedule2").hide();   
}

$("#tab_button1").click(function(){
    $("#schedule1").show();
    $("#schedule2").hide();
});

$("#tab_button2").click(function(){
    $("#schedule1").hide();
    $("#schedule2").show();
});

function addEasyCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value += 15;
} 

function removeEasyCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value -= 15;
}

function addNormalCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value += 25;
} 

function removeNormalCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value -= 25;
}

function addHardCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value += 40;
} 

function removeHardCourse() {
    document.getElementById('year1_fall1_tab1_difficulty').value -= 40;
} 

function add233() {
    document.getElementById('year1_fall1_tab1_difficulty').value += 50;
} 

function remove233() {
    document.getElementById('year1_fall1_tab1_difficulty').value -= 50;
}

function add438() {
    document.getElementById('year1_fall1_tab1_difficulty').value += 75;
} 

function remove438() {
    document.getElementById('year1_fall1_tab1_difficulty').value -= 75;
}

function fire() {
    var progressbar = document.getElementsByTagName('progress');
    for (var i = 0; i < progressbar.length; i++) {
        if (progressbar[i].value < 61) {
            $(progressbar[i]).removeClass("difficulty_bar_red");
            $(progressbar[i]).removeClass("difficulty_bar_yellow");
            $(progressbar[i]).addClass("difficulty_bar_green");
            console.log("Ba.");
        } else if (progressbar[i].value > 75) {
            $(progressbar[i]).removeClass("difficulty_bar_yellow");
            $(progressbar[i]).removeClass("difficulty_bar_green");
            $(progressbar[i]).addClass("difficulty_bar_red");
        } else {
            $(progressbar[i]).removeClass("difficulty_bar_green");
            $(progressbar[i]).removeClass("difficulty_bar_red");
            $(progressbar[i]).addClass("difficulty_bar_yellow");
            console.log("Ta.");
        }
    }
}