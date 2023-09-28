import { IonImg } from "@ionic/react";
import { Preview } from "../../models/home";

interface CardImageProps {
    preview: Preview;
}

export const CardImage: React.FC<CardImageProps> = ({ preview }) => (
    // need to handle slideshow and gifs
    <IonImg src={preview.images[0].source.url} />
)