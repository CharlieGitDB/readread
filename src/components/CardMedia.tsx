import { Media, Preview } from "../data/home-models";
import CardImage from "./CardImage";
import CardVideo from "./CardVideo";

interface CardMediaProps {
    isSelf: boolean;
    isVideo: boolean;
    preview?: Preview | null;
    media?: Media | null;
}

const CardMedia: React.FC<CardMediaProps> = ({ isSelf, isVideo, preview, media }) => ( 
  <>
    {isSelf || !preview
        ? <></>
        : isVideo ?
          <CardVideo preview={preview} media={media!} />
          : <CardImage preview={preview} /> 

    }
  </> 
)

export default CardMedia;