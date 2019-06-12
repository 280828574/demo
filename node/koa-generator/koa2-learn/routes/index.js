const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.cookies.set('pvID', Math.random());
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
});

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json',
        cookie:ctx.cookies.get('pvID')
    }
});

router.get('/a', async (ctx, next) => {
    const a = await 133;
    ctx.body = {
        a
    }
});

module.exports = router;
