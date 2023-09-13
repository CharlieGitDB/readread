import axios from "axios";
import { Reddit } from "./models";

export const getPosts = (lastPostId: string | null) =>
    axios
    .get(
        lastPostId
            ? `https://www.reddit.com/by_id/${lastPostId}.json?limit=100&raw_json=1&app=res`
            : `https://www.reddit.com/.json?limit=100&raw_json=1&app=res`
        )
        .then(res => (res.data as Reddit).data.children);