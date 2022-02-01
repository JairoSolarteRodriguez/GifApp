import Gif from "components/Gif/Gif"
import useGlobalGifs from "hooks/useGlobalGifs"

const Detail = ({ params }) =>{
  const gifs = useGlobalGifs()
  const gif = gifs.find(singleGif => singleGif.id === params.id)

  return <Gif {...gif}/>
}

export default Detail