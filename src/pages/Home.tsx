import {
  IonCard,
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
  IonToolbar
} from '@ionic/react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../data/get-posts';
import './Home.css';
import CardImage from '../components/CardImage';

const Home: React.FC = () => {
  const [postId, setPostId] = useState<string | null>(null);
  const { isLoading, isError, error, data, refetch, isFetching } = useQuery({
    queryKey: ['getPosts'],
    queryFn: () => getPosts(postId),
    refetchOnWindowFocus: false
  });

  const refresh = async (e: CustomEvent) => {
    await refetch();
    e.detail.complete();
  };

  if (isLoading || isFetching) return <IonProgressBar type="indeterminate"></IonProgressBar>
  if (isError) return <>{(error as any)?.message ?? 'Error loading posts'}</>

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
                <CardImage
                  isSelf={data.is_self}
                  isVideo={data.is_video}
                  preview={data.preview}
                />
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
