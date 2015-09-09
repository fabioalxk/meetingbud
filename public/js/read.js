$.getJSON( "/myjson.json", function( data ) {
	var x = data.sprint;
	var anchorSelected = 0;
	for (var i = 0, len = x.length; i < len; i++) {
		$(".sidebar-nav").append("<li><a data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
		$(".sprint-xs").append("<li><a class='sprint-anchors' data-index='"+i+"' href='#'>Sprint "+i+"</a></li>");
	}
	$(".sprint-xs").append("<hr /> <li><a href='#'>Share</a></li>");
	$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
	$(".content").append(x[anchorSelected].content);

	$(document).on( "click", ".sidebar-nav a", function() {
		anchorSelected = $(this).attr("data-index");
		$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		$(".content").append(x[anchorSelected].content);
	});
	$(document).on( "click", ".sprint-xs .sprint-anchors", function() {
		anchorSelected = $(this).attr("data-index");
		$(".content").html("<h1 class='text-center'>Sprint " + anchorSelected + "</h1>");
		$(".content").append(x[anchorSelected].content);
	});

	// Sharing feature
	var user = $.url().param("user");
	// end Sharing feature

	

});