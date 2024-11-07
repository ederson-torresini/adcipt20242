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

setup.loadScript('https://accounts.google.com/gsi/client', () => {
  google.accounts.id.initialize({
    client_id: engine.state.get('GoogleClientID'),
    callback: (res) => {
      if (res.error) {
        console.error(res.error)
      } else {
        fetch('https://feira-de-jogos.dev.br/api/v2/credit', {
          body: JSON.stringify({
            product: -1,
            value: 100
          }),
          headers: {
            Authorization: `Bearer ${res.credential}`,
          }
        }, () => {
          console.log(res)
        })
      }
    },
  })

  google.accounts.id.prompt((notification) => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      google.accounts.id.prompt()
    }
  })
})
