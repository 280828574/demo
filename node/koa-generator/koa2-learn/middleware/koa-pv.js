function pv(ctx) {
    global.console.log(ctx.path,'pv');
    global.console.log(ctx.session);
}
module.exports = function () {
    return async function (ctx,next) {
        pv(ctx);
        await next();
    }
};