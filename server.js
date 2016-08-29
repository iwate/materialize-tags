var connect = require('connect'),
    serveStatic = require('serve-static'),
    url = require('url'),
    proxy = require('proxy-middleware');

process.on('uncaughtException', function(err) {
    console.log(err);
});

var app = connect();

app.use(serveStatic(__dirname));
app.use('/api/meta', proxy(url.parse('http://dev.cbpaas.com/commerble.demo/cms.feed.v2/metadata/odata.svc')));
app.use('/api/list', proxy(url.parse('http://dev.cbpaas.com/commerble.demo/cms.feed.v2/list/odata.svc')));

app.use(proxy({
    hostname: 'localhost',
    port: 3000,
    forceRoute: true
}));
app.listen(3000);