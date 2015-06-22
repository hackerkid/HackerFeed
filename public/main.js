var content_url = "/api/new";

$.getJSON(content_url, function(data) {
	
	for(var i = 0; i < data.length; i++) {
		favicon = "http://www.google.com/s2/favicons?domain=" + data[i].url;
		$(".feed").append("<span class = 'item'><img src = "+favicon+" </img>");
		$(".feed").append("<span class = 'heading'><a href="+data[i].url+">"+data[i].title + "</span></a></span><br>")
	}
});