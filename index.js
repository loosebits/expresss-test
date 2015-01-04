var app = require('./app/server');
var db = require('./app/mongo');

var debug = require('debug')('express-test');
app.set('port', process.env.PORT || 3000);
db.once('open',function() {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});
function closeConnections() {
  db.close();
  process.exit();
}
process.on('SIGINT', closeConnections);
process.on('SIGTERM', closeConnections);