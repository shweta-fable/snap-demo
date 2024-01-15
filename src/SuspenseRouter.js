import { useLayoutEffect, useRef, useState, useTransition } from 'react'
import { Router } from 'react-router-dom'
import { BrowserHistory, createBrowserHistory, Update } from 'history'


export function SuspenseRouter({ basename, children, window }) {
  let historyRef = useRef()
  const [isPending, startTransition] = useTransition()

  if (historyRef.current == null) {
    //const history = createBrowserHistory(startTransition, { window });
    historyRef.current = createBrowserHistory({ window })
  }

  let history = historyRef.current
  let [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  function setStateAsync(update) {
    startTransition(() => {
      setState(update)
    })
  }

  useLayoutEffect(() => history.listen(setStateAsync), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
export default SuspenseRouter