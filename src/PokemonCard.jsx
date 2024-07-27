export const PokemonCard = (props) => {
  return (
    <>
      <li className='card'>
        <figure>
          <img
            src={props.data.sprites.other.dream_world.front_default}
            alt={props.data.name}
            className='pokemonImage'
          />
        </figure>

        <h2 className='pokemonName'>{props.data.name}</h2>
        <p className='pokemonType'>
          {props.data.types
            .map((currType) => {
              return currType.type.name;
            })
            .join(", ")}
        </p>

        <div className='upperDiv'>
          <p>
            <span>Height: </span>
            {props.data.height}
          </p>
          <p>
            <span>Weight: </span> {props.data.weight}
          </p>
          <p>
            <span>Speed: </span>
            {props.data.stats[5].base_stat}
          </p>
        </div>
        <div className='lowerDiv'>
          <div className='pokemonInfo'>
            <span>Experience: </span>
            <p>{props.data.base_experience}</p>
          </div>

          <div className='pokemonInfo'>
            <span>Attack: </span>
            <p>{props.data.stats[1].base_stat}</p>
          </div>

          <div className='pokemonInfo'>
            <span>Ability Info: </span>
            <p>{props.data.abilities[0].ability.name}</p>
          </div>
        </div>
      </li>
    </>
  );
};
