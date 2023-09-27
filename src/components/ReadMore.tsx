import { IonAccordion, IonAccordionGroup, IonItem, IonProgressBar } from "@ionic/react";
import { useQuery } from "react-query";
import { getMoreComments } from "../data/get-more-comments";
import { Post, PurpleReplies } from "../data/post-models";
import Comment from './Comment';

interface ReadMoreProps {
  subreddit: string;
  postId: string;
  commentId: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ subreddit, postId, commentId }) => {
  const { data, isError, error, isFetching, refetch } = useQuery<Post[]>(
    ['comments', commentId],
    () => getMoreComments(subreddit, postId, commentId),
    { 
      enabled: false
    }
  );

  if (!data && !isFetching) return (
    <IonAccordionGroup onClick={() => refetch()}>
      <IonAccordion readonly={true}>
        <IonItem slot="header">
          Read More
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  )

  if (isFetching) return (
    <IonAccordionGroup>
      <IonAccordion readonly={true} toggleIcon={undefined}>
        <IonItem slot="header">
          <IonProgressBar type='indeterminate' />
        </IonItem>
      </IonAccordion>
    </IonAccordionGroup>
  )

  if (isError) return (
    <>Error</>
  )

  const normalizedData = () => {
    if (!data) {
      return [];
    }
    const [_, ...posts] = data;

    return posts.map(p => p.data.children.map(c => c)).flat();
  }

  if (data) {
    return (
      <>
        {
          normalizedData().map((c, i) => (
            c.kind === 'more'
            ? <ReadMore key={i} subreddit={subreddit} postId={postId} commentId={c.data.id} />
            : <Comment key={i} subreddit={subreddit} postId={postId} comment={c.data.body} replies={c.data.replies as PurpleReplies} />
          ))
        }
      </>
    )
  }
}

export default ReadMore;