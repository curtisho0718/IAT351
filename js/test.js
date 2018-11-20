
//drag-and-drop
// function drag(e) {
// 	e.dataTransfer.setData("text", e.target.id);
// }

// function allowDrop(e) {
// 	e.preventDefault();
// }

// function drop(e) {
// 	e.preventDefault();
// 	var data = e.dataTransfer.getData("text");
// 	e.target.appendChild(document.getElementById(data));
// }
//

//display amount of elements in grid-coloumn 
 // function getChildCount () {
 //    var test = document.getElementById ("test");
 //    var childCount = test.childElementCount;

 //    document.getElementById("elem").innerHTML = childCount-2;
 // }
//

//display total amount of elements
 // function getChildTotal () {
 //    var test  = document.getElementById ("test1");
 //    var childCount = test.childElementCount;

 //    document.getElementById("total").innerHTML = childCount-4;
 // }
//
 // function getChildCount () {
 //    var test = document.getElementsByTagName("td").length;

 //    document.getElementById("elem").innerHTML = test;
 // }


function myFunction() {
    var x = $(".num").length - 1;
    document.getElementById("demo").innerHTML = x;
}

$(function() {
    $("table").hide(0).show(1000);
    $("li").hide(0).slideDown(1100);
    $("ul").sortable();
    $("ul").disableSelection();

    $("li").draggable({containment: 'document', revert: true, snap: 'td', scroll: false, helper: "clone",
    	start: function() {
    		var content = $(this).text();
   		}
	});

    $("td").droppable({hoverClass: 'bgrd', accept: '.item', //Jquery 'hover' instead of CSS
    drop: function() {
    	// if ($("li").hasClass("item")) 
    	$(this).addClass("num");
    	$("td").append(content);

    	$(".num").length;
    }

    });
});
