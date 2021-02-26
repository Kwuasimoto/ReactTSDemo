import axios, { AxiosResponse } from 'axios'
import React, { Fragment, useEffect } from 'react'
import { GlobalStateI } from '../App'
//import fs from 'fs'

const file = '../pokemon.json'
interface PokemonI {
  id?: number
  abilities?: object[]
  name: string
  height?: number
}

export type Pokemon = PokemonI

interface BodyStateI {
  pokemonList?: PokemonI[]
  setPokemon: React.Dispatch<React.SetStateAction<GlobalStateI>>
}

interface PokemonListI {
  results: object[]
}

type BodyState = BodyStateI

const fetchPokemon = async (): Promise<any> => {
  const resp: AxiosResponse<PokemonListI> = await axios.request<PokemonListI>({
    url: 'https://pokeapi.co/api/v2/pokemon?limit=100',
  })

  return resp.data.results
}

const Body: React.FC<BodyState> = (state: BodyState) => {
  const { pokemonList, setPokemon } = state

  console.log(pokemonList, 'Pokemon list')

  useEffect(() => {
    fetchPokemon()
      .then((data: Pokemon[]) => {
        //console.log(`DATA FROM REQUEST => ${JSON.stringify(data)}`)
        return setPokemon({ pokemon: [...data] })
      })
      .catch((e) => console.error(e.message))
  }, [setPokemon])

  return (
    <Fragment>
      <div>
        <ul key="test">
          {pokemonList ? (
            pokemonList.map((pokemon: Pokemon) => (
              <li key={pokemonList.indexOf(pokemon)}>{pokemon.name}</li>
            ))
          ) : (
            <div>Pokemon list has not been created.</div>
          )}
        </ul>
      </div>
    </Fragment>
  )
}

export default Body
