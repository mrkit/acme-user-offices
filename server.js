const
      express = require('express'),
      nunjucks = require('nunjucks'),
      path = require('path'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      db = require('./db/db'),
      officesRoutes = require('./routes/offices'),
      usersRoutes = require('./routes/users'),
      app = express();

//html view engine
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/users', usersRoutes);
app.use('offices', officesRoutes);

//error catching (catch all)
app.use((err, req, res, next) => {
  if(err) console.log(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
});