export default Function.prototype.myThrottle = function(ctx, interval) {
    let count = 0;
    // debugger
    return () => {
        if (count === ctx.maxBullets) {
            count++;
            setTimeout(() => {
                count = 0;
            }, interval);
        } else if (count < ctx.maxBullets) {
            this.call(ctx);
            count++;
        }
    }
}