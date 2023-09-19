import { IonPage, IonProgressBar } from "@ionic/react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPost } from "../data/get-post";

interface PostProps {
}

const Post: React.FC<PostProps> = () => {
  const { subreddit, postId } = useParams<{ subreddit: string, postId: string }>();
  const { data, isLoading, isError, error } = useQuery(['post', postId], () => getPost(subreddit, postId))

  return (
    <IonPage>
      {isLoading && <IonProgressBar type='indeterminate' />}
      {isError && <>{(error as { message?: string })?.message ?? 'Error loading post'}</>}
      {!isLoading && !isError && 
        (
          <>
            {subreddit}/{postId}
            {subreddit}/{postId}
            {JSON.stringify(data)}
          </>
        )
      }
    </IonPage>
  )
}

export default Post;