import axios from 'axios';

export const getMoreComments = (subreddit: string, postId: string, commentId: string) =>
    axios
        .get(
            `https://www.reddit.com/r/${subreddit}/comments/${postId}/title/${commentId}/.json`
        )
        .then(res => res.data)