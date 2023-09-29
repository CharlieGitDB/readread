import { Comment } from "@components";
import { getPost } from '@data';
import { IonContent, IonList, IonPage, IonProgressBar } from "@ionic/react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Post as PostModel } from '../../models/post';

export const Post: React.FC = () => {
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
  
  const IsLoading = () => <IonProgressBar type='indeterminate' />;
  const IsError = () => <>{(error as AxiosError)?.message ?? 'Error loading post'}</>;

  const normalizedData = () => {
    if (!data) {
      return [];
    }
    const [_, ...posts] = data;

    return posts.map(p => p.data.children.map(c => (
      {
        comment: c.data.body ?? '',
        replies: c.data.replies
      }
    ))).flat();
  }

  const Comments = () => (
    <IonContent fullscreen>
      <IonList>
        {normalizedData().map((c, i) =>
          <Comment
            key={i}
            open={true}
            subreddit={subreddit}
            postId={postId}
            comment={c.comment}
            replies={c.replies} />
        )}
      </IonList>
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