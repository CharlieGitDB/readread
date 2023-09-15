import { IonImg } from "@ionic/react";
import { Preview } from "../data/models";

interface CardImageProps {
    preview: Preview;
}

const CardImage: React.FC<CardImageProps> = ({ preview }) => (
    // need to handle slideshow and gifs
    <IonImg src={preview.images[0].source.url} />
)

export default CardImage;