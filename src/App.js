import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

function App() {
  const[allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=27&offset=0')

 const getAllPokemons = async () => {
   const res = await fetch(loadMore)
   const data = await res.json()

   setLoadMore(data.next)

   function createPokemonObject(results)  {

    {console.log(results)}
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       setAllPokemons( currentList => [...currentList, data])
      allPokemons.sort((a, b)=> a.id - b.id)
     })
   }
   createPokemonObject(data.results)
   
   
 }

useEffect(() => {
 getAllPokemons()
}, [])


  return (
    <>
      <Header />

      <Container maxWidth="xl">
        <Grid container>
          {allPokemons.map((pokemon, key) => (
            <Grid item xs={4} key={key}>
              <PokemonCard name={pokemon.name} image={pokemon.sprites.other.home.front_default} type={pokemon.types[0].type.name}  id={pokemon.id}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
