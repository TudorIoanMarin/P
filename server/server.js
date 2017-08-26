const     express = require('express'),
         path = require('path'),
         http = require('http'),
  serveStatic = require('serve-static'),
   bodyParser = require('body-parser');

const __frontend = '../dist';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, __frontend)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, `${__frontend}/index.html`));
});

app.get('/optymyze', (req, res) => {
  app.use(express.static(path.join(__dirname, `${__frontend}/modal`)));
  res.sendFile(path.join(__dirname, `${__frontend}/modal/index.html`));
});
 
app.post('/optymyze', (req, res) => {
  app.use(express.static(path.join(__dirname, `${__frontend}/modal`)));
  res.sendFile(path.join(__dirname, `${__frontend}/modal/added.html`));
});

const port = '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost: ${port}`));
