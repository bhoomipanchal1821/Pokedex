
import { PokemonSchema } from "../types/PokemonSchema";
import "./PokedexSearchResult.css";

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined;
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {
  const { name, id, height, weight, base_experience, sprites } =
    selectedPokemon || {};

  return (
    <div className="poke-result-card  d-flex align-items-center">
      {selectedPokemon ? (
        <div className="text-center mx-auto">
          <img
            className="pokemon-animated-sprite"
            alt="pokemon"
            src={sprites?.animated || sprites?.normal}
          />
          <div className="mt-5">
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Base Exp: {base_experience}</p>
          </div>
        </div>
      ) : (
        <h2 className="my-auto"> Welcome to the pokedex</h2>
      )}
    </div>
  );
};

export default PokeSearchResult;
