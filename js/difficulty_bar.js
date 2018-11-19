'use strict';

console.log("Animation JavaScript is online.");

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
    if (document.getElementById('year1_fall1_tab1_difficulty').value < 61) {
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_red");
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_yellow");
        $('#year1_fall1_tab1_difficulty').addClass("difficulty_bar_green");
    } else if (document.getElementById('year1_fall1_tab1_difficulty').value > 75) {
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_yellow");
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_green");
        $('#year1_fall1_tab1_difficulty').addClass("difficulty_bar_red");
    } else {
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_green");
        $('#year1_fall1_tab1_difficulty').removeClass("difficulty_bar_red");
        $('#year1_fall1_tab1_difficulty').addClass("difficulty_bar_yellow");
    }
}

function tab1() {
    // document.getElementById('tab1') {

    // }
}