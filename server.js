var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;

// serve static assets explicitly
app.use('/css', express.static('dist/css'));
app.use('/js', express.static('dist/js'));
app.use('/fonts', express.static('dist/fonts'));

// serve all other requests to single-page-app contained in index.html
app.get('*', function (req, res) {
  var options = {
    root: __dirname + '/dist/',
    dotfiles: 'deny'
  };
  res.sendFile('index.html', options);
});

app.listen(port);

console.log('App started on port ' + port);
