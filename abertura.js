export default class abertura extends Phaser.Scene {
  constructor () {
    super('abertura')
  }

  preload () {
    this.load.image('abertura', 'assets/abertura.png')
  }

  create () {
    this.add.image(400, 225, 'abertura')
    this.input.on('pointerdown', () => {
      this.scene.stop('abertura')
      this.scene.start('jogo')
    })
  }
}
