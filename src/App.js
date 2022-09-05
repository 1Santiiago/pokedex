import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

function App() {
  useEffect(() => {
    getPoke();
  }, []);

  const [pokemons, setPokemons] = useState([]);
  console.log(pokemons)
  

  // buscar a api
  const url = "https://pokeapi.co/api/v2/pokemon?limit=27";
  const getPoke = async () =>{
    const response = await fetch(url)
    const data = await response.json()
    setPokemons(data.results)
    

   const endpoint = []
   for(let end = 1; end <= 27; end++ ){
      endpoint.push(`https://pokeapi.co/api/v2/pokemon/${end}/`)

      let response = Promise.all(
       endpoint.map((endpoint) => fetch(endpoint)
        .then(response => response.json())
        .then(json => console.log(json.sprites.front_default))
        // .then(data => setPokemons(data))
          ))
   }

  }




  return (
    <>
      <Header />

      <Container maxWidth="xl">
        <Grid container>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={4} key={key}>
              <PokemonCard name={pokemon.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
