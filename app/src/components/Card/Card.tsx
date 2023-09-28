import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { chatbox, heart } from "ionicons/icons";
import { Media, Preview } from '../../models/home';
import './Card.css';
import { CardMedia } from "@components";

interface CardProps {
  id: string,
  isSelf: boolean;
  isVideo: boolean;
  preview?: Preview | null;
  media?: Media | null;
  subredditName: string;
  title: string;
  score: number;
  commentsCount: number;
}

export const Card: React.FC<CardProps> = (cardProps) => (
  <IonCard
    id="card"
    key={cardProps.id}
    routerLink={`/post/${cardProps.subredditName}/${cardProps.id}`}
  >
    <IonCardHeader>
      <CardMedia
        isSelf={cardProps.isSelf}
        isVideo={cardProps.isVideo}
        preview={cardProps.preview}
        media={cardProps.media}
      />
      <IonCardSubtitle>{`r/${cardProps.subredditName}`}</IonCardSubtitle>
      <IonCardSubtitle>{cardProps.title}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <IonGrid className='meta-grid'>
        <IonRow>
          <IonCol>
            <IonIcon icon={heart} />
            {cardProps.score}
          </IonCol>
          <IonCol>
            <IonIcon icon={chatbox} />
            {cardProps.commentsCount}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCardContent>
  </IonCard>
)