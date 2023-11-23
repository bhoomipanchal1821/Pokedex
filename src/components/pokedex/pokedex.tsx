import './pokedex.css'
import PokedexSearchResult from '../PokedexSearchResult/PokedexSearchResult';
import SearchBox from '../Searchbox/SearchBox';
import PokeList from '../PokeList/PokeList';
import { PokemonSchema } from '../types/PokemonSchema';

interface PokedexProps{
  pokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({
  pokemons,
  selectedPokemon,
  onInputChange,
  onPokemonClick,
}: PokedexProps) => {
  return (
    <div>
      <div className="conatiner mt-5 bg-danger mx-auto rounded-4">
        <div className="row g-0">
          <div className="col-sm-7">
            <div className="pokelist">
              <SearchBox onInputChange={onInputChange} />
            <PokeList onPokemonClick={onPokemonClick} pokemons ={pokemons}/>
           </div> 
            
          </div>
          
          <div className='col-sm-5 '>
          <div className="pokesearch "> <PokedexSearchResult selectedPokemon={selectedPokemon}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
