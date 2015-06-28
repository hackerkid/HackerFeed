var fs = require("fs");
var feed = require("feed-read");
var Post = require("./models/Post.js")


var parse_feed = function(url, blogId, blogName, category) {
    feed(url, function(err, articles) {
        if (err) throw err;

        for (var i = 0; i < articles.length; i++) {
            console.log(articles[i]);
            checkPostExistAndCreate(articles[i], blogId, blogName, category);
        
        }
    });

}

var display_content = function(feed_list) {
    for (var i = feed_list.length - 1; i >= 0; i--) {
        parse_feed(feed_list[i].feed_url, feed_list[i].blog_id,feed_list[i].blog_name, feed_list[i].category );
    };
}

var inititate_fetching = function() {
     fetcher();
     var timeInterval = 1000 * 60 * 10; // 10 minutes 
     setInterval(fetcher(), timeInterval);
 }

    
var fetcher = function() {

    fs.readFile("feedburner.json", "utf8", function(err, content) {
        var feed_list = JSON.parse(content);
        display_content(feed_list);
        
        }); 
}

var checkPostExistAndCreate = function(post, blog_id, blog_name, category) {
    Post.count({
        'title': post.title
    }, function(err, count) {

        if (err) {

            return handleError(err);
        } else {

            if (count == 0) {
                Post.create({
                    title: post.title,
                    //body: post.content,
                    author: post.author,
                    url: post.link,
                    date: post.published,
                    blogId: blog_id, 
                    blogName: blog_name,
                    category: category

                }, function(err, todo) {
                    if (err)
                        handleError(err);

                    console.log("created epicly");


                   
                });
            } else {
                return 1;
            }
        }
    })

}

module.exports = {
    parse_feed: parse_feed,
    display_content: display_content,
    inititate_fetching: inititate_fetching,
    fetcher: fetcher

};