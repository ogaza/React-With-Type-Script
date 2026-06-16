import http from 'http';
import express from 'express';

const HTTP_PORT = 4001;
// express static is relative to
// the directory from where the node process is launched
const WEB_PATH = 'web';

var app = express();
defineStaticServer(app);

var server = http.createServer(app);
server.listen(HTTP_PORT);

console.log(`Server running on http://localhost:${HTTP_PORT}`);

function defineStaticServer(app) {
  var fileServer = express.static(WEB_PATH, {
    maxAge: 100,
    setHeaders(res) {
      res.setHeader('Server', 'Static Files Server');
    }
  });

  app.use(fileServer);
}
