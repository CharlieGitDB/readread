import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent
} from '@ionic/react';
import Card from '../components/Card';
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

  if (isLoading) return <IonProgressBar type='indeterminate' />
  if (isError) return <>{(error as { message?: string })?.message ?? 'Error loading posts'}</>

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
          {data?.pages.flat().map(({ data }) =>
            <Card
              key={data.id}
              id={data.id}
              isSelf={data.is_self}
              isVideo={data.is_video}
              subredditName={data.subreddit}
              title={data.title}
              preview={data.preview}
              media={data.media}
              score={data.score}
              commentsCount={data.num_comments}
            />
          )}
        </IonList>
        <IonInfiniteScroll onIonInfinite={loadMorePosts}>
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
