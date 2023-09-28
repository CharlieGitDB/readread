import { Media, Preview } from "../../models/home";
import { CardVideo, CardImage } from '@components';

interface CardMediaProps {
    isSelf: boolean;
    isVideo: boolean;
    preview?: Preview | null;
    media?: Media | null;
}

export const CardMedia: React.FC<CardMediaProps> = ({ isSelf, isVideo, preview, media }) => ( 
  <>
    {isSelf || !preview
        ? <></>
        : isVideo ?
          <CardVideo preview={preview} media={media!} />
          : <CardImage preview={preview} /> 

    }
  </> 
)