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

export const Util = {
    scale(vec, m) {
        return [vec[0] * m, 0, vec[1] * m, 0];
    },

    randomVec() {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], 1);
    }
}