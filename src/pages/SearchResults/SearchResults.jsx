import React, {useEffect, useRef, useCallback} from 'react'
import Spiner from 'components/Spiner/Spiner'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'


const SearchResults = ({ params }) => {

  const {   } = params
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false
  })


  // const handleNextPage = () => setPage(prevPage => prevPage + 1)
  
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(()=>{
    if(isNearScreen) debounceHandleNextPage()
  }, [isNearScreen, debounceHandleNextPage])

  return<>
    {loading
      ? <Spiner />
      : <ListOfGifs gifs={gifs}/>
    }
    <div id='visor' ref={externalRef}></div>
  </>

}

export default SearchResults;