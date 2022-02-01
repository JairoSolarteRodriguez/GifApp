import { useState } from 'react'
import { useLocation } from "wouter"
import { useGifs } from 'hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Category from 'components/Category/Category'

const POPULAR_GIFS = ["Matrix", "Programacion", "Gatos", "Perros", "Canada"]

const Home = () =>{
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()


  const handleSubmit = event => {
    event.preventDefault()
    //Navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }
  
  return(
    <>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" placeholder='Busca un gif' value={keyword}/>
      </form>
      <div>
        <h3>Ultima busqueda</h3>
        <ListOfGifs gifs={gifs}/>
      </div>

      <div className='App-category'>
        <Category
          name="Categorias Populares"
          options={POPULAR_GIFS}
        />
        <Category
          name="Mascotas"
          options={["Perros", "Gatos", "Tigres"]}
        />
      </div>
    </>
  )
}

export default Home