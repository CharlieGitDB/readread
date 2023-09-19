import { IonPage, IonProgressBar } from "@ionic/react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPost } from "../data/get-post";
import { AxiosError } from "axios";

const Post: React.FC = () => {
  const { subreddit, postId } = useParams<{ subreddit: string, postId: string }>();
  const { data, isLoading, isError, error } = useQuery(['post', postId], () => getPost(subreddit, postId))
  
  if (isLoading) return (
    <IonPage>
      <IonProgressBar type='indeterminate' />
    </IonPage>
  )

  if (isError) return (
    <IonPage>
      {(error as AxiosError)?.message ?? 'Error loading post'}
    </IonPage>
  )

  return (
    <IonPage>
      {subreddit}/{postId}
      {JSON.stringify(data)}
    </IonPage>
  )
}

export default Post;