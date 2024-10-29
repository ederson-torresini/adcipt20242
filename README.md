# ADC/IPT 2024.2

Projeto do semestre 2024.2.

## Jogo modelo

Os dois irmãos, Tobias e Lola, conseguiram [resgatar o pai da Matrix](https://github.com/ederson-torresini/adcipt20232). Meses depois, brincando com a IA da casa, descobrem que ela esconde segredos industriais do pai que foram copiados pela Matrix, supostamente, desativada. Assim, eles precisam desligar os equipamentos conectados na nuvem antes que algo de pior aconteça.

### Referências

Nos jogos antigos, a principal referência foi, inegavelmente, [The Matrix](https://www.imdb.com/title/tt0133093/). Para este novo jogo, pensei nas IAs pessoais ou domésticas, como [Her](https://www.imdb.com/title/tt1798709/) e [Tau](https://www.imdb.com/title/tt4357394/), passando por aquelas mais rebeldes, como em [Eu, Robô](https://www.imdb.com/title/tt0343818/) e [Ex Machina](https://www.imdb.com/title/tt0470752/), até chegar (sem contar o final do filme!) em [I Am Mother](https://www.imdb.com/title/tt6292852/). Assim, surgiu a ideia de uma IA doméstica que, ao responder a simples perguntas dos filhos, expõe segredos industriais que somente o pai parece saber (e esconder da família), argumento esse inspirado em [Bandersnatch](https://www.imdb.com/title/tt9495224/).

Nos jogos, pensei em algo como [Intruders: hide and seek](https://www.intrudersgame.com), onde os jogadores devem se esconder do inimigo, que pode ser desde uma câmera de segurança em movimento até uma IA de mesa ouvindo tudo o que é dito. Para a lógica do jogo, de tentativa e erro (*rogue-like*), as inspirações foram Limbo e Inside, ambos da [Playdead](https://playdead.com). Porém, assim como na versão clássica de [Prince of Persia](https://en.wikipedia.org/wiki/Prince_of_Persia_(1989_video_game)), o tempo avança mesmo após cada tentativa.

### Universo

O jogo se passa em uma casa de 3 andares: subsolo, térreo e primeiro piso. No subsolo, ficam os materiais para usar ao longo do jogo; no térreo estão os equipamentos de rede, guardados por câmeras e sensores de movimento; no primeiro piso, por fim, estão os equipamentos de segurança, como alarmes e sensores de fumaça.

### Personagens

São dois os personagens:

1. Lola: a irmão mais nova, com 16 anos. É enérgica e assertiva, indicada para as ações que exigem mais velocidade. Corajosa, não tem medo de enfrentar os desafios, porém pode levá-la a ser imprudente em momentos críticos.
1. Tobias: o irmão mais velho. Aos 24 anos, é programador. Analítico e paciente, indicado para as ações que exigem sangue frio. De mente dedutiva, pode ser lento ou distraído em relação ao ambiente que o cerca.

Quanto aos equipamentos da casa, são eles:

1. Câmera de segurança: liga e desliga de forma intermitente, com movimentação regular (*pan*) de até 180 graus. Quando está ligada, se capturar a imagem de um dos jogadores, ambos retornam ao *checkpoint*.
1. Sensor de presença: mesmo funcionamento da câmera, porém sem movimento. Não tem acesso físico, e por isso precisa ser desligado pelo disjuntor ou ter seu fio cortado.
1. IA de mesa: ouve as conversas dos jogadores. Se captar uma voz no ambiente, ambos retornam ao *checkpoint*.
1. Roteador: o chefão. Não tem acesso físico, e por isso precisa ser desligado remotamente.

### Regras

O jogo é baseado em tempo, onde os jogadores devem descobrir o jeito correto de desligar cada equipamento, além da sua ordem. Ao estilo *rogue-like*, toda vez que forem detectados, eles voltam ao início da cena, o *checkpoint*, para tentar novamente. Porém, o tempo avança sempre, o que significa que os jogadores precisarão lidar bem com o tempo, e suas falhas, para chegarem ao final em tempo.

Se ambos os jogadores conseguirem desligar todos os equipamentos em tempo hábil, eles ganham o jogo. Caso contrário, perdem e voltam à tela inicial. Na próxima partida, o jogo pode movimentar ou mesmo mudar os equipamentos.

### Fontes de receita

O jogo pode ser personalizado com *skins*, tanto para os personagens quanto para a estética da casa e seus equipamentos. Além disso, pode ser vendido em partes, como o jogo base e as expansões (DLCs), que podem incluir novos equipamentos, novos personagens ou novos cenários. Além disso, algumas cenas, como quadros e geladeira, podem conter propaganda de produtos reais.

## Equipes

| Equipe | Projeto | Jogo | Entrega 1 | Entrega 2 |
|-|-|-|-|-|
| [Chernobily](https://github.com/Chernobily) | [2024.2](https://github.com/orgs/Chernobily/projects/2)  | [ChernoRPG](https://github.com/Chernobily/ChernoRPG) | 0 (6 tarefas) | 0 (0 tarefa) |
| [Cryptobiosis](https://github.com/cryptobiosis-studio) | [2024.2](https://github.com/orgs/cryptobiosis-studio/projects/1) | [Gunslinger](https://github.com/cryptobiosis-studio/gunslinger) | 6 | 6 | 
| [Guiter Hero Luthier](https://github.com/guitar-hero-luthier) | [2024.2](https://github.com/orgs/guitar-hero-luthier/projects/1) | [Guitar Hero Luthier](https://github.com/guitar-hero-luthier/guitar-hero-luthier) | 6 | 6 |
| [Hidan Studion](https://github.com/Hidan-Studio) | Link quebrado | [Rescue Run](https://github.com/Hidan-Studio/rescue-run) | 0 | 0 |
| [lendária studios](https://github.com/lendaria-studios) | [2024.2](https://github.com/orgs/lendaria-studios/projects/1) | [The Last Keepers](https://github.com/lendaria-studios/the-last-keepers) | 0 (8 tarefas) | 6 | 
| [LM Enterprise](https://github.com/lmenterprise) | [2024.2](https://github.com/orgs/lmenterprise/projects/1) | [Mazel](https://github.com/lmenterprise/mazel) | 0 (7 entregas) | 6 |
| [joginho](https://github.com/joginho) | [2024.2](https://github.com/orgs/joginho/projects/1) | [Suave na nave](https://github.com/joginho/joginho) | 6 | 6 |
| [N K Corporeichom](https://github.com/n-k-corporeichom) | [2024.2](https://github.com/orgs/n-k-corporeichom/projects/1) | [jogo zumbi](https://github.com/n-k-corporeichom/jogo_zumbi) | 0 (1 tarefa) | 0 (1 tarefa) | 
| [pixel por pixel](https://github.com/pixel-por-pixel) | [2024.2](https://github.com/orgs/pixel-por-pixel/projects/1) | [The fate of the letters](https://github.com/pixel-por-pixel/the-fate-of-the-letters) | 0 (7 tarefas) | 0 (2 tarefas)
| [seeus](https://github.com/seeus) | [2024.2](https://github.com/orgs/seeus/projects/1) | [Herdeiras da Magia](https://github.com/seeus/herdeiras-da-magia) | 0 (8 tarefas) | 6 |
| [Piermed Games](https://github.com/Piermed-Games) | [2024.2](https://github.com/orgs/Piermed-Games/projects/1) | [Shape Adventure](https://github.com/Piermed-Games/Shape-Adventure) | 0 (8 tarefas) | 0 (4 tarefas) |
| [talemes](https://github.com/talemes) | [2024.2](https://github.com/orgs/talemes/projects/1) | [jengu](https://github.com/talemes/jengu) | 0 (0 tarefa) | 0 (0 tarefa) |
