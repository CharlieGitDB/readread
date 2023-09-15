import {
  InfiniteScrollCustomEvent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent
} from '@ionic/react';
import { chatbox, heart } from 'ionicons/icons';
import CardImage from '../components/CardImage';
import usePostPageQuery from '../hooks/usePostPageQuery';
import './Home.css';

const Home: React.FC = () => {
  const { data, isLoading, isError, error, refetch, fetchNextPage } = usePostPageQuery();

  const refresh = async (e: RefresherCustomEvent) => {
    await refetch();
    e.detail.complete();
  };

  const loadMorePosts = async(e: InfiniteScrollCustomEvent) => {
    await fetchNextPage();
    e.target.complete();
  }

  if (isLoading) return <IonProgressBar type="indeterminate"></IonProgressBar>
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
          {data?.pages.flat().map(({ data }) => (
              <IonCard key={data.id}>
                <IonCardHeader>
                  <CardImage
                    isSelf={data.is_self}
                    isVideo={data.is_video}
                    preview={data.preview}
                  />
                  <IonCardSubtitle>{data.subreddit_name_prefixed}</IonCardSubtitle>
                  <IonCardTitle>{data.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonGrid className='meta-grid'>
                    <IonRow>
                      <IonCol>
                        <IonIcon icon={heart}></IonIcon>
                        {data.score}
                      </IonCol>
                      <IonCol>
                        <IonIcon icon={chatbox}></IonIcon>
                        {data.num_comments}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
          ))}
        </IonList>
        <IonInfiniteScroll onIonInfinite={loadMorePosts}>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
