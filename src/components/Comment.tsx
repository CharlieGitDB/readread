import { IonAccordion, IonAccordionGroup, IonItem } from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import { ChildKind, FluffyReplies, PurpleReplies } from '../data/post-models';
import ReadMore from './ReadMore';
import { ReactNode, useEffect, useRef, useState } from 'react';
import './Comment.css';
import randomColor from '../data/random-color';

interface CommentProps {
  subreddit: string,
  postId: string,
  color?: string,
  open?: boolean,
  comment?: string,
  replies?: string | PurpleReplies | FluffyReplies,
}

const Comment: React.FC<CommentProps> = ({ subreddit, postId, color, comment, replies, open = false }) => {
  if (!comment) return <></>;
  
  const Reply = ({ replies }: { replies: string | PurpleReplies | FluffyReplies | undefined }) => {
    const replyColor = randomColor();
    if (!replies) return <></>;

    if (Object.prototype.toString.call(replies) === "[object String]") {
      return <Comment subreddit={subreddit} postId={postId} comment={replies as string} color={replyColor} />
    }

    return (replies as PurpleReplies).data?.children?.map((r, i) => (
      r.kind === ChildKind.More
      ? <ReadMore key={i} subreddit={subreddit} postId={postId} commentId={r.data.id} color={replyColor} />
      : <Comment key={i} subreddit={subreddit} postId={postId} comment={r.data.body} replies={r.data.replies} color={replyColor} />
    ))
  }

  const Accordion = ({ children }: { children: ReactNode }) => {
    if (!replies) {
      return (
        <IonAccordion value={open ? 'open' : ''} toggleIcon={undefined}>
          {children}
        </IonAccordion>
      )
    } else {
      return (
        <IonAccordion value={open ? 'open' : ''}>
          {children}
        </IonAccordion>
      )
    }
  }

  return (
    <IonAccordionGroup value="open">
      <Accordion>
          <IonItem style={{ borderLeft: `${color ? '3px solid' + color : ''}`}} slot="header">
            <ReactMarkdown>{comment}</ReactMarkdown>
          </IonItem>
          <div className='accordion-content' slot="content">
            <Reply replies={replies} />
          </div>
      </Accordion>
    </IonAccordionGroup>
  )
}

export default Comment;