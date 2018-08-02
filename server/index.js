const serve = require('koa-static');
const Koa = require('koa');

const app = new Koa();

// $ GET /hello.txt
app.use(serve('src/public'));

app.listen(3000);

// -> Follow instructions at https://github.com/koajs/static
