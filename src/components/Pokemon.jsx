import React, { useEffect, useState } from 'react'
import PokaCard from './PokaCard'

const Pokemon = () => {
    const [pokemonApiData, setPokemonApiData] = useState([]);
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false);
    let searchData= pokemonApiData.filter((cur)=>cur.name.toLowerCase().includes(input.toLocaleLowerCase()));
    const api="https://pokeapi.co/api/v2/pokemon?limit=500"
    const fetchPokemon = async ()=>{
        try {
        let response= await fetch(api);
        let data = await response.json();
       let pokemonData= data.results.map(async (cur)=>{
           return (await fetch(cur.url)).json();
        });
        const ServerResponse= await Promise.all(pokemonData);
        setLoading(true)
        setPokemonApiData(ServerResponse)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchPokemon()
    },[]);
    if (!loading) {
        return(
            <>
         <div className="loader_main fc">
         <div className="loader"></div>
         </div>
            </>
        )
    }
  return (
   <>
    <header className="fc">
       <div className="container fc"><h1>Lets catch pokemon</h1></div>
    </header>

    <div className="searchbar fc">
       <div className="container fc">
       <input type="text" placeholder="Search Pokemon" value={input} onChange={(e)=>setInput(e.target.value)}/>
       </div>
    </div>
    <div className="pokemoncard cc">
        <div className="container pokemon_card_content">
           {/* <PokaCard /> */}
           {
            searchData.map((cur,index)=>{
                return  <PokaCard key={cur.id} data={cur}/>
            })
           }
        </div>
    </div>
   </>
  )
}

export default Pokemon