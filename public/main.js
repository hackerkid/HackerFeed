var content_url = "http://localhost:8080/api/new";

$.getJSON(content_url, function(data) {
	
	for(var i = 0; i < data.length; i++) {
		$("#feed").append(data[i].title+"<hr>");
	}
});