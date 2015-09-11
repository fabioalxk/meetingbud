$.getJSON( "/myjson.json", function( data ) {
	var x = data.sprint;
	var anchorSelected = 0;
	var setText = function(){
		$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		$(".content").append("<div class='form-group'><textarea class='form-control textarea' rows='20' id='comment'>" + x[anchorSelected].content + "</textarea></div>");
	}

	for (var i = 0, len = x.length; i < len; i++) {
		$(".sidebar-nav").append("<li><a data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
		$(".sprint-xs").append("<li><a class='sprint-anchors' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
	}
	$(".sprint-xs").append("<hr /> <li><a href='#'>Share</a></li>");
	// $(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
	// $(".content").append("<div class='form-group'><textarea class='form-control' rows='5' id='comment'>" + x[anchorSelected].content + "</textarea></div>");
	setText();

	$(document).on( "click", ".sidebar-nav a", function() {
		anchorSelected = $(this).attr("data-index");
		// $(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		// $(".content").append(x[anchorSelected].content);
		setText();
	});
	$(document).on( "click", ".sprint-xs .sprint-anchors", function() {
		anchorSelected = $(this).attr("data-index");
		// $(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		// $(".content").append(x[anchorSelected].content);
		setText();
	});

	// Sharing feature
	var user = $.url().param("user");
	// end Sharing feature

});

$(document).on( "click", ".plus", function() {
	alert("plus");
});
$(document).on( "click", ".save", function() {
	alert($(".textarea").text());
});