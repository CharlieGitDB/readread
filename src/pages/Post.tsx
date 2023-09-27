import { IonAccordion, IonAccordionGroup, IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonPage, IonProgressBar } from "@ionic/react";
import { AxiosError } from "axios";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPost } from "../data/get-post";
import { Post as PostModel, PurpleReplies } from "../data/post-models";

const Post: React.FC = () => {
  const { subreddit, postId } = useParams<{ subreddit: string, postId: string }>();
  const { data, isLoading, isError, error } = useQuery<PostModel[]>(['post', postId], () => getPost(subreddit, postId));
  
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
        replies: c.data.replies ?? []
      }
    ))).flat();
  }

  const Cards = () => (
    <IonContent fullscreen>
      <IonList>
        {normalizedData().map((c, i) =>
          <IonAccordionGroup key={i} value="open">
            <IonAccordion value="open">
              <IonItem slot="header">
                <ReactMarkdown>{c.comment}</ReactMarkdown>
              </IonItem>
              <div className="ion-padding" slot="content">
                <ul>
                  {(c.replies as PurpleReplies).data?.children?.map((x, ii) => (
                    x.kind === 'more' ? <li key={ii}>Read more</li> : <li key={ii}>{x.data.body}</li>
                  ))}
                </ul>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        )}
      </IonList>
    </IonContent>
  )

  const Content = () => {
    if (isLoading) return <IsLoading />
    if (isError) return <IsError />

    return <Cards />
  }

  return (
    <IonPage>
      <IonHeader collapse="fade">
        <IonButtons slot="start">
          <IonBackButton text="Posts" defaultHref="/home"/>
        </IonButtons>
      </IonHeader>
      <Content />
    </IonPage>
  )
}

export default Post;