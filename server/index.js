const Koa = require('koa');
const serve = require('koa-static');
const { get } = require('koa-route');

const app = new Koa();

const data = require('../src/data/summits.json');

// JSON endpoint, adapted from https://github.com/koajs/route
app.use(
  get('/api/v1/peaks', ctx => {
    ctx.body = data;
  })
);

app.use(serve('src/public'));

app.listen(3000);
// -> Follow instructions at https://github.com/koajs/static
