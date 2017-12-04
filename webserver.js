var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic('statics'));
app.listen(9000);