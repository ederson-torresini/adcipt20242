export default class mapa extends Phaser.Scene {
  constructor () {
    super('mapa')
  }

  preload () {
    this.load.tilemapTiledJSON('mapa', 'assets/mapa/mapa.json')
    this.load.image('estrutura', 'assets/mapa/estrutura.png')
    this.load.image('grama', 'assets/mapa/grama.png')
    this.load.image('itens', 'assets/mapa/itens.png')
    this.load.image('jogadores', 'assets/mapa/jogadores.png')
    this.load.image('parede', 'assets/mapa/parede.png')
    this.load.image('pedra', 'assets/mapa/pedra.png')
    this.load.image('plantas', 'assets/mapa/plantas.png')
    this.load.image('sombras-plantas', 'assets/mapa/sombras-plantas.png')
    this.load.image('sombras', 'assets/mapa/sombras.png')

    this.load.spritesheet('personagem', 'assets/personagem.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.tilemapMapa = this.make.tilemap({ key: 'mapa' })

    this.tilesetEstrutura = this.tilemapMapa.addTilesetImage('estrutura')
    this.tilesetGrama = this.tilemapMapa.addTilesetImage('grama')
    this.tilesetItens = this.tilemapMapa.addTilesetImage('itens')
    this.tilesetJogadores = this.tilemapMapa.addTilesetImage('jogadores')
    this.tilesetParede = this.tilemapMapa.addTilesetImage('parede')
    this.tilesetPedra = this.tilemapMapa.addTilesetImage('pedra')
    this.tilesetPlantas = this.tilemapMapa.addTilesetImage('plantas')
    this.tilesetSombrasPlantas = this.tilemapMapa.addTilesetImage('sombras-plantas')
    this.tilesetSombras = this.tilemapMapa.addTilesetImage('sombras')

    this.layerChao = this.tilemapMapa.createLayer('chao', [this.tilesetGrama], 0, 0)
    this.layerSombra = this.tilemapMapa.createLayer('sombras', [this.tilesetSombras, this.tilesetSombrasPlantas], 0, 0)
    this.layerArvores = this.tilemapMapa.createLayer('arvores', [this.tilesetPlantas], 0, 0)
    this.layerMoveis = this.tilemapMapa.createLayer('moveis', [this.tilesetItens], 0, 0)

    this.anims.create({
      key: 'parado',
      frames: [{ key: 'personagem', frame: 15 }],
      frameRate: 1
    })

    this.anims.create({
      key: 'andar-direita',
      frames: this.anims.generateFrameNumbers('personagem', { start: 88, end: 96 }),
      frameRate: 10,
      repeat: -1
    })

    this.personagem = this.physics.add.sprite(50, 225, 'personagem', 15)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.personagem.body.velocity.x === 0) {
          this.personagem.setVelocityX(100)
          this.personagem.anims.play('andar-direita')
        } else {
          this.personagem.setVelocityX(0)
          this.personagem.anims.play('parado')
        }
      })
  }
}
