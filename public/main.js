var content_url = "/api/new";

$.getJSON(content_url, function(data) {
	
	for(var i = 0; i < data.length; i++) {
		//favicon = "http://www.google.com/s2/favicons?domain=" + data[i].url;
		profilePic = "images/"+data[i].blogId+".jpg";
		$(".feed").append("<span class = 'item'><img id='profilePic' src = "+profilePic + "> </img>");
		$(".feed").append("<span class = 'heading'><a href="+data[i].url+">"+data[i].title + "</span></a></span><br>")
	}
});