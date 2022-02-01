import { useState, useEffect, useContext } from "react"
import getGifts from "services/getGifts"
import GifsContext from "context/GifsContext"

const INITIAN_PAGE = 0

export const useGifs = ({ keyword } = { keyword: null}) =>{
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
  const [page, setPage] = useState(INITIAN_PAGE);
  
  //Recuperar la keyword del localStorage
  const keywordToUse = keyword ||localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoading(true)


    getGifts({ keyword : keywordToUse, limit : 5 })
      .then(async gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el local storage
        if(keyword) localStorage.setItem('lastKeyword', keyword)
      });
  }, [ keyword, setGifs, keywordToUse ]);

  useEffect(() => {
    if(page === INITIAN_PAGE) return

    setLoadingNextPage(true)

    getGifts({ keyword: keywordToUse, page, limit: 5}).then(nextGifs => {
      setGifs(prevGif => prevGif.concat(nextGifs))
      setLoadingNextPage(false)
      
    })

  }, [page, keywordToUse, setGifs])

  return{ loading, gifs, setPage, loadingNextPage}
}