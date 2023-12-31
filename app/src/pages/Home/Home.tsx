import {
  InfiniteScrollCustomEvent,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  RefresherCustomEvent
} from '@ionic/react';
import { AxiosError } from 'axios';
import './Home.css';
import usePostPageQuery from '../../hooks/usePostPageQuery';
import { Card } from '../../components';

export const Home: React.FC = () => {
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
  if (isError) return <>{(error as AxiosError)?.message ?? 'Error loading posts'}</>

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

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