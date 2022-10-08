import Tank from "./tank";

export default class EnemyTank extends Tank {
    constructor(options) {
        super(options);
        this.type = options.type;
        if (this.type === 'red') {
            this.body.src = 'images/tanks/tankBody_red_outline.png';
            this.barrel.src = 'images/tanks/tankRed_barrel2_outline.png';
            this.maxBullets = 1;
        }
    }
}