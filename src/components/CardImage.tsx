import { Preview } from "../data/models";

interface CardImageProps {
    isSelf: boolean;
    isVideo: boolean;
    preview?: Preview;
}

const CardImage: React.FC<CardImageProps> = ({ isSelf, isVideo, preview }) => ( 
  <>
    {isSelf || !preview
        ? <></>
        : <img src={preview.images[0].source.url} /> //need to handle slideshow
    }
  </> 
)

export default CardImage;