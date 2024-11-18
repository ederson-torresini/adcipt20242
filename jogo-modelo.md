# Jogo modelo

## Servidor

Serviço via `systemd`:

```ini
[Unit]
Description=<Descritivo>
Documentation=<URL do repositório>
After=network.target

[Service]
Environment=PORT=3000
Type=simple
WorkingDirectory=<diretório local do repositório>
ExecStart=<caminho do npm> start
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Proxy reverso HTTP via NGINX:

```c
location / {
	proxy_pass http://localhost:3000/;
	proxy_http_version 1.1;
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection "Upgrade";
	proxy_set_header Host $host;
}
```

## Cliennte

### Escolha de sala e início de partida

Adicionar logo na primeira passagem:

```js
[JavaScript]
const audioObj = document.createElement('audio')
audioObj.setAttribute('id', 'conversa')
audioObj.setAttribute('autoplay', 'true')
document.body.appendChild(audioObj)
[continued]
```

Em uma passagem de escolha de sala, adicionar a variável que a define:

```js
{text input for: 'sala'}
```

Depois, em uma passagem posterior deve-se adicionar o seguinte código JavaScript para iniciar a partida em dupla:

```js
[JavaScript]
window.setup = {}

setup.loadError = function (oError) {
  throw new URIError(
    'The script ' + oError.target.src + " didn't load correctly."
  )
}

setup.loadScript = function (url, onloadFunction) {
  const newScript = document.createElement('script')
  newScript.onerror = setup.loadError
  if (onloadFunction) {
    newScript.onload = onloadFunction
  }
  document.head.appendChild(newScript)
  newScript.async = true
  newScript.src = url
}

const audio = document.getElementById('conversa')
console.log('audio', audio)

const iceServers = {
  iceServers: [
    {
      urls: 'stun:feira-de-jogos.dev.br'
    },
    {
      urls: 'turn:feira-de-jogos.dev.br',
      username: 'adcipt202412',
      credential: 'adcipt20242'
    }
  ]
}

let midias
navigator.mediaDevices.getUserMedia({ video: false, audio: true })
  .then((stream) => {
    midias = stream
    console.log('midias', midias)
  })
  .catch((error) => console.error(error))

setup.loadScript('https://cdn.socket.io/4.8.0/socket.io.min.js', () => {
  let socket
  if (window.location.host === 'feira-de-jogos.dev.br') {
    socket = io({ path: '/adcipt20242/socket.io/' })
  } else {
    socket = io()
  }

  const sala = engine.state.get('sala')
  console.log('sala', sala)

  socket.on('connect', () => {
    socket.emit('entrar-na-sala', sala)
  })

  socket.on('jogadores', (jogadores) => {
    console.log(jogadores)
    if (jogadores.segundo) {
      if (jogadores.primeiro === socket.id) {
        const remoteConnection = new RTCPeerConnection(iceServers)
        const dadosJogo = remoteConnection.createDataChannel('dadosJogo', { negotiated: true, id: 0 })
        console.log('remoteConnection', remoteConnection)
        console.log('dadosJogo', dadosJogo)

        remoteConnection.onicecandidate = function ({ candidate }) {
          candidate && socket.emit('candidate', sala, candidate)
        }

        remoteConnection.ontrack = function ({ streams: [midia] }) {
          audio.srcObject = midia
          console.log('audio.srcObject', audio.srcObject)
        }

        if (midias) {
          midias.getTracks()
            .forEach((track) => remoteConnection.addTrack(track, midias))
        }

        socket.on('offer', (description) => {
          remoteConnection.setRemoteDescription(description)
            .then(() => remoteConnection.createAnswer())
            .then((answer) => remoteConnection.setLocalDescription(answer))
            .then(() => socket.emit('answer', sala, remoteConnection.localDescription))
        })

        socket.on('candidate', (candidate) => {
          remoteConnection.addIceCandidate(candidate)
        })
      } else if (jogadores.segundo === socket.id) {
        const localConnection = new RTCPeerConnection(iceServers)
        const dadosJogo = localConnection.createDataChannel('dadosJogo', { negotiated: true, id: 0 })
        console.log('localConnection', localConnection)
        console.log('dadosJogo', dadosJogo)

        localConnection.onicecandidate = function ({ candidate }) {
          candidate && socket.emit('candidate', sala, candidate)
        }

        localConnection.ontrack = function ({ streams: [stream] }) {
          audio.srcObject = stream
          console.log('audio.srcObject', audio.srcObject)
        }

        if (midias) {
          midias.getTracks()
            .forEach((track) => localConnection.addTrack(track, midias))
        }

        localConnection.createOffer()
          .then((offer) => localConnection.setLocalDescription(offer))
          .then(() => socket.emit('offer', sala, localConnection.localDescription))

        socket.on('answer', (description) => {
          localConnection.setRemoteDescription(description)
        })

        socket.on('candidate', (candidate) => {
          localConnection.addIceCandidate(candidate)
        })
      }
    }
  })
})
[continued]
```
