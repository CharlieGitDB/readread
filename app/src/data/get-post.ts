import axios from "axios";

export const getPost = (subreddit: string, postId: string) =>
    axios
        .get(
            `https://www.reddit.com/r/${subreddit}/comments/${postId}/.json`
        )
        .then(res => res.data)