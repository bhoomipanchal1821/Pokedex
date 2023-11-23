import PokeCard from "../PokeCard/PokeCard";
import { PokemonSchema } from "../types/PokemonSchema";
import "./PokeList.css";

interface PokelistProps {
  pokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}
const PokeList = ({ pokemons, onPokemonClick }: PokelistProps) => {
  return (
    <div className="pokelist-name">
      {pokemons.map((pokemon) => {
        return (
            pokemon.name && (
                <PokeCard key={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprites.normal} onPokemonClick={onPokemonClick} />
            )
           
        );
      })}
    </div>
  );
};

export default PokeList;
