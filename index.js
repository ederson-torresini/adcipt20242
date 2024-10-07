import config from './config.js'
import abertura from './abertura.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura', abertura)
    this.scene.start('abertura')
  }
}

window.onload = () => {
  window.game = new Game()
}
