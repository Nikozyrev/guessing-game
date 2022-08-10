class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.range = Array.from({ length: max - min + 1 }, (n, i) => i + min)
    }

    guess() {
        this.result = this.range[Math.round(this.range.length / 2)]
        return this.result
    }

    lower() {
        this.range = this.range.slice(0, this.range.indexOf(this.result) )
    }

    greater() {
        this.range = this.range.slice(this.range.indexOf(this.result) )
    }
}

const game = new GuessingGame
game.setRange(0, 20)
game.guess()
game.lower()
console.log(game);

module.exports = GuessingGame;
