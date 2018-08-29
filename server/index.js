const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const render = require('koa-ejs');
const { get } = require('koa-route');
const dotenv = require('dotenv');

// Place this first
dotenv.config();

const app = new Koa();

const ROOT_DIR = path.resolve(__dirname, '..', 'src', 'public');

render(app, {
  root: ROOT_DIR,
  layout: false,
  viewExt: 'ejs',
});

// JSON endpoint, adapted from https://github.com/koajs/route
app.use(
  get('/api/v1/peaks', ctx => {
    // eslint-disable-next-line global-require
    const data = require('../src/data/summits.json');
    ctx.body = data;
  })
);

app.use(serve(ROOT_DIR));

app.use(ctx =>
  ctx.render('index', {
    // Pass server values to the template here
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  })
);

app.listen(3000);
// -> Follow instructions at https://github.com/koajs/static
