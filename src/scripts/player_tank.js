export default class PlayerTank extends Tank {
    constructor(options) {
        super({ pos: [100, 100], game: this, type: 'player' })
    }
}