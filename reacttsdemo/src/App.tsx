import React from 'react'
import { useState, Fragment } from 'react'
import './App.css'
import Body, { BodyState, Pokemon } from './components/Body'
//import Header from './components/Header'

export interface GlobalStateI {
  isLoading?: boolean
  pokemon?: Pokemon[]
}

type GlobalState = GlobalStateI

const App: React.FC = () => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    isLoading: true,
    pokemon: [],
  })

  const { isLoading, pokemon } = globalState

  console.log(isLoading, pokemon)

  if (isLoading) {
    setGlobalState({ isLoading: false, pokemon: [] })
    return <div className="App">Page is loading</div>
  }

  const bodyState: BodyState = {
    setPokemon: setGlobalState,
    pokemonList: globalState.pokemon,
  }

  return (
    <Fragment>
      {/* <Header randomString="String" alerts={alerts} /> */}
      <Body {...bodyState}></Body>
    </Fragment>
  )
}

export default App
