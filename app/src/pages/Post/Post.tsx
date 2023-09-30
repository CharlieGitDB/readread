import { Comment } from "@components";
import { getPost } from '@data';
import { IonContent, IonPage, IonProgressBar, useIonViewDidEnter } from "@ionic/react";
import { AxiosError } from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Post as PostModel } from '../../models/post';
import { normalizeData } from '@util';

export const Post: React.FC = () => {
  const ionContent = useRef<HTMLIonContentElement | null>(null);
  const { subreddit, postId } = useParams<{ subreddit: string, postId: string }>();
  const { data, isLoading, isError, error } = useQuery<PostModel[]>(
    ['post', postId],
    () => getPost(subreddit, postId),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false
    }
  );

  useIonViewDidEnter(() => {
    ionContent.current?.scrollToTop();
  })
  
  const IsLoading = () => <IonProgressBar type='indeterminate' />;
  const IsError = () => <>{(error as AxiosError)?.message ?? 'Error loading post'}</>;

  const Comments = () => (
    <IonContent ref={ionContent} fullscreen>
      {normalizeData(data).map((c, i) =>
        <Comment
          key={i}
          open={true}
          subreddit={subreddit}
          postId={postId}
          comment={c.data.body ?? ''}
          replies={c.data.replies} />
      )}
    </IonContent>
  )

  const Content = () => {
    if (isLoading) return <IsLoading />
    if (isError) return <IsError />

    return <Comments />
  }

  return (
    <IonPage>
      <Content />
    </IonPage>
  )
}