const dataInicio = new Date()
const minutosDePartida = 10
const dataTermino = new Date(dataInicio.getTime() + minutosDePartida * 60000)

function formatarData (data) {
  return data.getHours() + ':' + (data.getMinutes() < 10 ? '0' : '') +
    data.getMinutes() + ':' + (data.getSeconds() < 10 ? '0' : '') +
    data.getSeconds()
}

setInterval(() => {
  const data = new Date()
  engine.state.set('hora', formatarData(data))

  const segundos = Math.round((dataTermino.getTime() - data.getTime()) / 1000)
  engine.state.set('segundos', segundos)
  engine.state.set('minutos', Math.round(segundos / 60))

  if (segundos > 0) {
    engine.state.set('fimDeJogo', false)
  } else {
    engine.state.set('fimDeJogo', true)
  }
}, 1000)

engine.state.set('minutos', minutosDePartida)
engine.state.set('horaTermino', formatarData(dataTermino))
