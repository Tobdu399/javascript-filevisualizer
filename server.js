let http = require('http');
let fs = require('fs');

const hostname = "https://127.0.0.1"
const port = 3000;

fs.readFile('www/index.html', function (err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(port);

    console.log("Listening on port %s:%s", hostname, port);
    console.log("Press ^C to stop");
});