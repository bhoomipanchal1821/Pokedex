import "./PokeCard.css";
interface PokeCardProps{
  spriteUrl?: string;
  name:string ;
  onPokemonClick: (pokemonName: string) => void;
}
const PokeCard = ({name, spriteUrl, onPokemonClick }: PokeCardProps) => {
  return (
    <div>
      <div className="conatiner mt-3 w-100 mx-auto ">
        <div className="row float-start mt-3 ">
          <div className="col-6 ">
            <div onClick={() => onPokemonClick(name)} className="card fw-light border-dark text-center">
              <img src={spriteUrl} className="card-img-top mx-auto" alt="pokeimg" />
              <div className="card-body">
                <p className="card-text">{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
