import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { useState } from 'react';
import MessageListItem from '../components/MessageListItem';
import { Message, getMessages } from '../data/messages';
import './Home.css';
import { useQuery } from 'react-query';
import { getPosts } from '../data/get-posts';

const Home: React.FC = () => {
  const [postId, setPostId] = useState<string | null>(null);
  const { isLoading, isError, error, data } = useQuery('getPosts', () => getPosts(postId));

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  if (isLoading) return <IonProgressBar type="indeterminate"></IonProgressBar>
  if (isError) return <>{(error as any).message ?? 'Error loading posts'}</>

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {data?.map(({ data }) => (
            <IonCard key={data.id}>
              <IonCardHeader>
                {data.thumbnail !== 'self' ? <img src={data.url} /> : <></>}
                <IonCardSubtitle>{data.subreddit_name_prefixed}</IonCardSubtitle>
                <IonCardTitle>({data.score}) {data.title}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
