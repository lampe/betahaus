var http =  require('http');
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://xkcd.com/';
img = '';
title = '';
function start() {
	//lets get the image of today 
	requestImageFromXkcd();
	//send it to the user
	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<img border="0" src="'+img+'"> <p>'+title+'');
	}).listen(1337, '127.0.0.1');
}
function requestImageFromXkcd(){
// let the request module get the url and print it into the console and save it
request(url, function(err, resp, body) {
    if (err)
        throw err;
    $ = cheerio.load(body);
    console.log(img = $("#comic img")[0].attribs.src);
    console.log(title = $("#comic img")[0].attribs.title);
});
}


exports.start = start;