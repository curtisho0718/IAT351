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

    $(".semester").droppable({hoverClass: 'bgrd', accept: '.item', //Jquery 'hover' instead of CSS
    drop: function() {
    	$(this).addClass("num");
    	$("td").append(content);

    	$(".num").length;
    }

    });
});
