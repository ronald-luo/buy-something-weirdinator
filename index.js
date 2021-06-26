var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  const directory = {
      '/': './src/index.html',
      '/about': './src/about.html',
      '/contact': './src/contact.html'
  }

  try {
    fs.readFile(directory[req.url], function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

  } catch (e) {
    fs.readFile("./src/404.html", function(err, data) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
  }
  
}).listen(8080);