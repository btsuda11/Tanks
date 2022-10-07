export default Function.prototype.myThrottle = function(ctx, interval) {
    let count = 0;
    // debugger
    return () => {
        if (count === 5) {
            count++;
            setTimeout(() => {
                count = 0;
            }, interval);
        } else if (count < 5) {
            this.call(ctx);
            count++;
        }
    }
}