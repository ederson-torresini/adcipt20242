export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.spritesheet('personagem', 'assets/personagem.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.personagem = this.physics.add.sprite(0, 225, 'personagem', 88)
    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('personagem', { start: 88, end: 96 }),
      frameRate: 10,
      repeat: -1
    })

    this.personagem.setVelocityX(100)
    this.personagem.play('andar-direita')
  }
}
