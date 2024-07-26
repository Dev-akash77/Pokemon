import React from 'react'

const PokaCard = ({data}) => {
  //?types of pokemon==============================================================
  let types=data.types.map((cur)=>{
    return cur.type.name;
  })
  return (
    <>
      <div className="card_main cc">
                <div className="image_main cc">
                <img  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt="Bulbasaur" />
                </div>
                <h2>{data.name}</h2>
                <div className="pokemon_type">
                    <p className="type">{types.join(", ")}</p>
                </div>
                <div className="pokemon_details_main">
                    <p className="ad">Height: <span>{data.height}</span></p>
                    <p className="ad">weight: <span>{data.weight}</span></p>
                    <p className="ad">speed: <span>{data.stats[5].base_stat}</span></p>
                    <p className="ad ads"><span>{data.base_experience}</span> Experience:</p>
                    <p className="ad ads"><span>{data.stats[3].base_stat}</span> attack:</p>
                    <p className="ad ads"><span>{data.abilities[0].ability.name}</span>abilities:</p>
                </div>
        </div>
    </>
  )
}

export default PokaCard